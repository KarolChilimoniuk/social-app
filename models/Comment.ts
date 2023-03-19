import mongoose, { Schema, model } from "mongoose";
import { IComment } from "interfaces";

const CommentSchema = new Schema<IComment>({
  content: { type: String, required: true },
  author: { type: Object, required: true },
  responses: { type: [String], default: [] },
  created: { type: Date, default: new Date() },
  likes: { type: [String], default: [] },
});

export const CommentModel = model<IComment>("Comments", CommentSchema);
