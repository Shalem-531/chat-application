import express from "express";
import User from "../Models/user.model.js";
import { verifyWebhook } from "@clerk/backend/webhooks";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const signingSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
    if (!signingSecret) {
      return res.status(500).json({ message: "Missing webhook secret" });
    }

    const evt = await verifyWebhook(req, { signingSecret });

    const { type, data: u } = evt;

    if (type === "user.created" || type === "user.updated") {
      const email =
        u.email_addresses?.find((e) => e.id === u.primary_email_address_id)
          ?.email_address ||
        u.email_addresses?.[0]?.email_address;

      const fullName =
        [u.first_name, u.last_name].filter(Boolean).join(" ") ||
        u.username ||
        email?.split("@")[0];

      await User.findOneAndUpdate(
        { clerkId: u.id },
        {
          clerkId: u.id,
          email,
          fullName,
          profilePic: u.image_url,
        },
        { upsert: true, new: true }
      );
    }

    if (type === "user.deleted") {
      await User.findOneAndDelete({ clerkId: u.id });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(400).json({ message: "Webhook failed" });
  }
});

export default router;