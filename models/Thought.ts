import { string } from "joi";
import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { IThought } from "../services/interfaces";

const ThoughtSchema = new Schema<IThought>({
  likes: { type: [String], default: [] },
  textContent: { type: String, default: "" },
  comments: { type: [String], default: [] },
  shares: { type: Number, default: 0 },
  created: { type: Date, default: new Date() },
  author: Object,
});

export const ThoughtModel = model<IThought>("Thoughts", ThoughtSchema);
