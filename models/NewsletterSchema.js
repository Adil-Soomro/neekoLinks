import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
    {
        email: { type: String, required: true }
    },
    { timestamps: true }
)

export const NewsletterSubscriber = mongoose.models.NewsletterSubscriber || mongoose.model('NewsletterSubscriber', NewsletterSchema)