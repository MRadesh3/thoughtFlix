import { Schema, models, model } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Post content is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
