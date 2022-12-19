import mongoose, { Schema, model } from "mongoose";
import { IThought } from "../services/interfaces";

const ThoughtSchema = new Schema<IThought>({
  content: String,
  likes: [String],
  comments: [String],
  shares: Number,
  created: Date,
  author: Object,
});

export const ThoughtModel = model<IThought>("Thoughts", ThoughtSchema);
