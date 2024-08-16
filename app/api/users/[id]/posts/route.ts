import { connectToDB } from "@/libs/database";
import Prompt from "@/models/Prompt";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch prompts" }), {
      status: 500,
    });
  }
};
