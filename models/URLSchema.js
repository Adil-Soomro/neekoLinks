import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema(
    {
        url: { type: String, required: true },
        shortUrl: { type: String, required: true },
        clicks: { type: Number, default: 0 },
        isActive: { type: Boolean, default: true},
        lastAccess: { type: Date, default: null },
    },
    { timestamps: true }
)

export const url = mongoose.models.url || mongoose.model('url', UrlSchema)