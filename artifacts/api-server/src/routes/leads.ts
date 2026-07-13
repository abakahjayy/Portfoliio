import { Router, type IRouter, type Request, type Response } from "express";

const router: IRouter = Router();

/**
 * Placeholder lead-capture routes for the portfolio site's forms.
 *
 * These intentionally do NOT send email or persist to a database yet --
 * the site owner has their own backend/notification system and just needs
 * the route contracts. Wire in real email (e.g. Nodemailer/Resend) or
 * storage (the pre-configured Postgres DB) here when ready.
 */

interface ContactPayload {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

interface OrderPayload {
  businessName?: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  websitePages?: string;
  featuresNeeded?: string;
  budget?: string;
  deadline?: string;
  referenceWebsite?: string;
  projectDescription: string;
  preferredContactMethod?: string;
  agreeToBeContacted: boolean;
}

router.post("/contact", (req: Request, res: Response): void => {
  const body = req.body as Partial<ContactPayload>;

  if (
    typeof body.fullName !== "string" ||
    !body.fullName ||
    typeof body.email !== "string" ||
    !body.email ||
    typeof body.message !== "string" ||
    !body.message
  ) {
    res
      .status(400)
      .json({ error: "fullName, email, and message are required" });
    return;
  }

  req.log.info({ from: body.email, subject: body.subject }, "Contact form submission received");

  // TODO: send an email to abakahjoshua358@gmail.com (or your preferred
  // notification channel) with this payload once your backend is wired up.
  res.status(201).json({ success: true });
});

router.post("/order", (req: Request, res: Response): void => {
  const body = req.body as Partial<OrderPayload>;

  if (
    typeof body.name !== "string" ||
    !body.name ||
    typeof body.email !== "string" ||
    !body.email ||
    typeof body.projectType !== "string" ||
    !body.projectType ||
    typeof body.projectDescription !== "string" ||
    !body.projectDescription
  ) {
    res.status(400).json({
      error: "name, email, projectType, and projectDescription are required",
    });
    return;
  }

  req.log.info({ from: body.email, projectType: body.projectType }, "Website order submission received");

  // TODO: send an email to abakahjoshua358@gmail.com (or your preferred
  // notification channel) with this payload once your backend is wired up.
  res.status(201).json({ success: true });
});

export default router;
