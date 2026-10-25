export interface InquiryEmailData {
  name: string;
  email: string;
  phone?: string;
  travelDate?: string;
  travelers?: string;
  interestedTour?: string;
  message: string;
  submittedAt?: string;
}

/**
 * Escapes HTML characters to prevent XSS / HTML injection in the email body.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Formats a clean, responsive HTML email for customer inquiries.
 */
export function renderInquiryEmailHtml(data: InquiryEmailData): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : "Not provided";
  const safeDate = data.travelDate ? escapeHtml(data.travelDate) : "Flexible / Not specified";
  const safeTravelers = data.travelers ? escapeHtml(data.travelers) : "Not specified";
  const safeTour = data.interestedTour ? escapeHtml(data.interestedTour) : "General Inquiry / Tailor-Made";
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");
  const timestamp = data.submittedAt || new Date().toUTCString();

  // Create clean phone link
  const rawDigitsPhone = data.phone ? data.phone.replace(/[^0-9]/g, "") : "";
  const whatsappUrl = rawDigitsPhone
    ? `https://wa.me/${rawDigitsPhone}?text=${encodeURIComponent(
        `Hello ${data.name}, thank you for reaching out to Ravi Tours & Travels regarding your Sri Lanka trip!`
      )}`
    : null;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Travel Inquiry - Ravi Tours & Travels</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6;">

  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Branded Top Banner -->
          <tr>
            <td style="background-color: #07345A; padding: 28px 32px; border-bottom: 4px solid #F6A623;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #F6A623; margin-bottom: 6px;">
                      WEBSITE INQUIRY NOTIFICATION
                    </div>
                    <div style="font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      Ravi Tours &amp; Travels
                    </div>
                    <div style="font-size: 13px; color: #cbd5e1; margin-top: 4px;">
                      Sri Lanka Private Tours &amp; Chauffeur Services
                    </div>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <span style="display: inline-block; padding: 4px 10px; background-color: rgba(255, 255, 255, 0.12); border-radius: 6px; font-size: 11px; font-weight: 600; color: #f8fafc; border: 1px solid rgba(255, 255, 255, 0.15);">
                      Priority Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro Bar -->
          <tr>
            <td style="padding: 24px 32px 16px 32px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
              <div style="font-size: 15px; font-weight: 600; color: #07345A;">
                You have received a new inquiry from the website contact form.
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                Received: ${timestamp}
              </div>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 28px 32px;">

              <!-- Traveler Details Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="background-color: #f8fafc; padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; color: #07345A; text-transform: uppercase; letter-spacing: 1px;">
                    Traveler Information
                  </td>
                </tr>
                <tr>
                  <td width="35%" style="padding: 12px 16px; font-size: 13px; color: #64748b; border-bottom: 1px solid #f1f5f9;">
                    Full Name:
                  </td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; color: #64748b; border-bottom: 1px solid #f1f5f9;">
                    Email Address:
                  </td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                    <a href="mailto:${safeEmail}" style="color: #087EA4; text-decoration: none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; color: #64748b;">
                    Phone / WhatsApp:
                  </td>
                  <td style="padding: 12px 16px; font-size: 14px; color: #0f172a;">
                    ${
                      data.phone
                        ? `<a href="tel:${safePhone}" style="color: #07345A; font-weight: 600; text-decoration: none;">${safePhone}</a>`
                        : `<span style="color: #94a3b8; font-style: italic;">Not provided</span>`
                    }
                  </td>
                </tr>
              </table>

              <!-- Trip Details Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td colspan="2" style="background-color: #f8fafc; padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; color: #07345A; text-transform: uppercase; letter-spacing: 1px;">
                    Trip Requirements
                  </td>
                </tr>
                <tr>
                  <td width="35%" style="padding: 12px 16px; font-size: 13px; color: #64748b; border-bottom: 1px solid #f1f5f9;">
                    Travel Date:
                  </td>
                  <td width="65%" style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
                    ${safeDate}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; color: #64748b; border-bottom: 1px solid #f1f5f9;">
                    Group Size:
                  </td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
                    ${safeTravelers}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; color: #64748b;">
                    Interest / Package:
                  </td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #07345A;">
                    ${safeTour}
                  </td>
                </tr>
              </table>

              <!-- Customer Message Box -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 12px; font-weight: 700; color: #07345A; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                  Customer Message / Notes:
                </div>
                <div style="background-color: #f8fafc; border-left: 4px solid #087EA4; border-radius: 0 10px 10px 0; padding: 16px 20px; font-size: 14px; color: #1e293b; line-height: 1.7; white-space: pre-wrap; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Quick Action CTAs -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 8px;">
                <tr>
                  <td align="center">
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 8px; background-color: #07345A; margin-right: 10px;">
                          <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: Sri Lanka Tour Inquiry - Ravi Tours & Travels`)}"
                             style="display: inline-block; padding: 12px 24px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 8px;">
                            ✉ Reply via Email
                          </a>
                        </td>
                        ${
                          whatsappUrl
                            ? `<td width="12"></td>
                               <td align="center" style="border-radius: 8px; background-color: #25D366;">
                                 <a href="${whatsappUrl}" target="_blank"
                                    style="display: inline-block; padding: 12px 24px; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 8px;">
                                   💬 Chat on WhatsApp
                                 </a>
                               </td>`
                            : ""
                        }
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <div style="font-size: 12px; color: #64748b; line-height: 1.5;">
                This inquiry was submitted from the official website contact page:
                <br/>
                <a href="https://ravitoursandtravels.com" style="color: #087EA4; text-decoration: none; font-weight: 600;">
                  ravitoursandtravels.com
                </a>
              </div>
              <div style="font-size: 11px; color: #94a3b8; margin-top: 8px;">
                Ravi Tours &amp; Travels &bull; Colombo, Sri Lanka &bull; Phone / WhatsApp: +94 76 884 6228
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates a clean plain text version for email clients that do not render HTML.
 */
export function renderInquiryEmailText(data: InquiryEmailData): string {
  const timestamp = data.submittedAt || new Date().toUTCString();
  return `=== NEW WEBSITE TRAVEL INQUIRY - RAVI TOURS & TRAVELS ===

Time Received: ${timestamp}

TRAVELER DETAILS:
- Full Name: ${data.name}
- Email: ${data.email}
- Phone/WhatsApp: ${data.phone || "Not provided"}

TRIP DETAILS:
- Approximate Travel Date: ${data.travelDate || "Flexible / Not specified"}
- Group Size: ${data.travelers || "Not specified"}
- Tour / Service: ${data.interestedTour || "General Inquiry / Tailor-Made"}

MESSAGE:
${data.message}

---
Submitted via ravitoursandtravels.com contact form.
To respond, reply directly to this email (${data.email}).`;
}
