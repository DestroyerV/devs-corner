import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import "@/styles/globals.css";

export const metadata = {
  title: "Dev Corner",
  description: "A home for developers to share their knowledge",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
