import { Schema, model, models } from "mongoose";

// Export your Mongoose models here. Add one export per file as the schema grows.
// Each model should ideally be split into its own file once there are several.

const contactSubmissionSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String, required: true },
    projectType: { type: String },
    budget: { type: String },
    timeline: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

export const ContactSubmission =
  models.ContactSubmission ||
  model("ContactSubmission", contactSubmissionSchema);

const orderSubmissionSchema = new Schema(
  {
    businessName: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    projectType: { type: String, required: true },
    websitePages: { type: String },
    featuresNeeded: { type: String },
    budget: { type: String },
    deadline: { type: String },
    referenceWebsite: { type: String },
    projectDescription: { type: String, required: true },
    preferredContactMethod: { type: String },
    agreeToBeContacted: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const OrderSubmission =
  models.OrderSubmission || model("OrderSubmission", orderSubmissionSchema);
