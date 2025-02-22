import { connectToDB } from "@/libs/database";
import Prompt from "@/models/Prompt";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }>}
) => {
  try {
    await connectToDB();

    const id = (await params).id;

    const prompts = await Prompt.find({
      creator: id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch prompts" }), {
      status: 500,
    });
  }
};
