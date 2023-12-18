import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");

    return NextResponse.json({ prompts }, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to load prompts", { status: 500 });
  }
};
