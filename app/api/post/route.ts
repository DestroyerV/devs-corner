import { connectToDB } from "@/libs/database";
import Prompt from "@/models/Prompt";

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch prompts" }), {
      status: 500,
    });
  }
};
