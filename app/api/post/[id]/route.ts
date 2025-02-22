import { connectToDB } from "@/libs/database";
import Prompt from "@/models/Prompt";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    await connectToDB();

    const id = (await params).id;

    const prompt = await Prompt.findById(id).populate("creator");

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch prompts" }), {
      status: 500,
    });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ id: string }>  }
) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const id = (await params).id;

    const existingPrompt = await Prompt.findById(id);

    if (!existingPrompt) {
      return new Response(JSON.stringify({ error: "Prompt not found" }), {
        status: 404,
      });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update prompt" }), {
      status: 500,
    });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ id: string }>  }
) => {
  try {
    await connectToDB();

    const id = (await params).id;

    await Prompt.findByIdAndDelete(id);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete prompt" }), {
      status: 500,
    });
  }
};
