import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import { revalidatePath } from "next/cache";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find()
      .sort({ createdAt: -1 })
      .populate("creator");

    const path = req.nextUrl.pathname;
    console.log(path);
    revalidatePath(path);

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to load the prompts", { status: 500 });
  }
};
