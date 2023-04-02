import { Schema, model } from "mongoose";
import { ICommentResponse } from "../interfaces";

const CommentResponseSchema = new Schema<ICommentResponse>({
  content: { type: String, required: true },
  author: { type: Object, required: true },
  created: { type: Date, default: new Date() },
  likes: { type: [String], default: [] },
});

export const CommentResponseModel = model<ICommentResponse>(
  "Responses",
  CommentResponseSchema
);
