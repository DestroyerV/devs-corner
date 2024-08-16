import NextAuth, { NextAuthOptions, Profile, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/libs/database";
import User from "@/models/Users";

const options : NextAuthOptions  = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      if (session.user?.email) {
        try {
          const sessionUser = await User.findOne({ email: session.user.email });
          if (sessionUser) {
            session.user.id = sessionUser._id.toString();
          }
        } catch (error) {
          console.error("Error fetching user from DB:", error);
        }
      }
      return session;
    },
    async signIn({ profile }: { profile?: Profile }) {
      try {
        await connectToDB();

        if (profile?.email) {
          const userExists = await User.findOne({ email: profile.email });

          if (!userExists) {
            await User.create({
              email: profile.email,
              name: profile.name,
              username: profile.email.split("@")[0].toLowerCase(),
              image: profile.picture,
            });
          }
        }

        return true;
      } catch (error) {
        console.error("Error signing in user:", error);
        return false;
      }
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
