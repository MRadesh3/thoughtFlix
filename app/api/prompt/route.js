import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const dynamic = "force-dynamic";
export const revalidate = true;
export const fetchCache = "force-no-store";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find().limit(10).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to load the prompts", { status: 500 });
  }
};
