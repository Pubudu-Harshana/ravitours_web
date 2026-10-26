import { NextRequest, NextResponse } from "next/server";
import { sendInquiryNotification } from "@/lib/email/resend";
import { InquiryEmailData } from "@/lib/email/templates/inquiryTemplate";

// Basic email regex validator
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      travelDate,
      arrivalDate,
      departureDate,
      travelers,
      guidingService,
      guideLanguage,
      interestedTour,
      message,
      // Honeypot field for bot spam prevention
      _gotcha,
      // Form render timestamp for rapid-bot detection
      _renderedAt,
    } = body;

    // 1. Honeypot check: If a bot filled out the hidden field, return silent success
    if (_gotcha && String(_gotcha).trim() !== "") {
      console.warn("[Spam Protection] Honeypot triggered, dropping submission.");
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // 2. Rapid-bot check: Reject if submitted faster than 1 second from page load
    if (_renderedAt) {
      const duration = Date.now() - Number(_renderedAt);
      if (duration > 0 && duration < 1000) {
        console.warn("[Spam Protection] Rapid submission detected (< 1s), dropping.");
        return NextResponse.json(
          { success: true, message: "Inquiry received." },
          { status: 200 }
        );
      }
    }

    // 3. Validation: Name
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide your full name (minimum 2 characters).",
        },
        { status: 400 }
      );
    }
    if (name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be under 100 characters." },
        { status: 400 }
      );
    }

    // 4. Validation: Email
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address so we can reply.",
        },
        { status: 400 }
      );
    }
    if (email.length > 150) {
      return NextResponse.json(
        { success: false, error: "Email must be under 150 characters." },
        { status: 400 }
      );
    }

    // 5. Validation: Message
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter your message or travel plans (minimum 5 characters).",
        },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must be under 5,000 characters." },
        { status: 400 }
      );
    }

    // Prepare clean email payload
    const emailPayload: InquiryEmailData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone && typeof phone === "string" ? phone.trim().slice(0, 50) : undefined,
      travelDate:
        (arrivalDate || travelDate) && typeof (arrivalDate || travelDate) === "string"
          ? String(arrivalDate || travelDate).trim().slice(0, 50)
          : undefined,
      arrivalDate:
        arrivalDate && typeof arrivalDate === "string"
          ? arrivalDate.trim().slice(0, 50)
          : undefined,
      departureDate:
        departureDate && typeof departureDate === "string"
          ? departureDate.trim().slice(0, 50)
          : undefined,
      guidingService:
        guidingService && typeof guidingService === "string"
          ? guidingService.trim().slice(0, 100)
          : undefined,
      guideLanguage:
        guideLanguage && typeof guideLanguage === "string"
          ? guideLanguage.trim().slice(0, 50)
          : undefined,
      travelers:
        travelers && typeof travelers === "string"
          ? travelers.trim().slice(0, 50)
          : undefined,
      interestedTour:
        interestedTour && typeof interestedTour === "string"
          ? interestedTour.trim().slice(0, 200)
          : undefined,
      message: message.trim(),
      submittedAt: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Colombo",
        dateStyle: "full",
        timeStyle: "medium",
      }) + " (Sri Lanka Time)",
    };

    // 6. Send the email via Resend
    const result = await sendInquiryNotification(emailPayload);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.error ||
            "Unable to send your inquiry at this time. Please try again or contact us via WhatsApp.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully sent to Ravi Tours & Travels.",
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[API Contact Route Error]", error);
    const errMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      {
        success: false,
        error: `Failed to process inquiry: ${errMessage}`,
      },
      { status: 500 }
    );
  }
}
