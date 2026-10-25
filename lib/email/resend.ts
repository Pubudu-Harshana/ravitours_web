import { Resend } from "resend";
import {
  InquiryEmailData,
  renderInquiryEmailHtml,
  renderInquiryEmailText,
} from "./templates/inquiryTemplate";

// Default recipient requested by user
export const DEFAULT_TO_EMAIL = "info@ravitoursandtravels.com";

// Default sender for initial setup / unverified domain fallback
export const DEFAULT_FROM_EMAIL = "Ravi Tours & Travels <onboarding@resend.dev>";

export interface SendInquiryResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Sends customer inquiry email to the Ravi Tours & Travels team using Resend.
 */
export async function sendInquiryNotification(
  data: InquiryEmailData
): Promise<SendInquiryResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey.trim() === "") {
    console.error(
      "[Resend] RESEND_API_KEY is not configured in environment variables."
    );
    return {
      success: false,
      error:
        "The email service is not currently configured. Please configure RESEND_API_KEY in your environment variables.",
    };
  }

  const resend = new Resend(apiKey);

  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  const subject = `New Sri Lanka Tour Inquiry: ${data.name}${
    data.interestedTour ? ` - ${data.interestedTour}` : ""
  }`;

  const htmlContent = renderInquiryEmailHtml(data);
  const textContent = renderInquiryEmailText(data);

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email, // Allows team to reply directly to customer
      subject: subject,
      html: htmlContent,
      text: textContent,
      headers: {
        "X-Entity-Ref-ID": `${Date.now()}`,
      },
    });

    if (response.error) {
      console.error("[Resend Error]", response.error);
      return {
        success: false,
        error: response.error.message || "Failed to deliver inquiry email.",
      };
    }

    return {
      success: true,
      messageId: response.data?.id,
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected email error occurred.";
    console.error("[Resend Exception]", errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
