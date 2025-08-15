import mongoose from "mongoose";

const HelpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export const HelpCenterContacts = mongoose.models.HelpCenterContacts || mongoose.model("HelpCenterContacts", HelpSchema);
