import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    gmail: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const user =
  mongoose.models.users || mongoose.model("users", userSchema);
