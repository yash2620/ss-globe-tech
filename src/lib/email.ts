import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  name, email, phone, subject, message
}: {
  name: string; email: string; phone?: string; subject?: string; message: string;
}) {
  return resend.emails.send({
    from: 'SS Globe Tech <noreply@ssglobetech.com>',
    to: ['info@ssglobetech.com'],
    replyTo: email,
    subject: `New Enquiry from ${name}${subject ? ` - ${subject}` : ''}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 24px auto; background: #fff; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="background: #1e3a8a; padding: 24px; text-align: center;">
              <h1 style="color: #fff; margin: 0; font-size: 22px;">SS Globe Tech</h1>
              <p style="color: #d4af37; margin: 4px 0 0;">Premier Merchant Exporter</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px;">
              <h2 style="color: #1e3a8a; font-size: 18px; margin: 0 0 16px;">New Contact Enquiry</h2>
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr><td style="font-weight: 700; color: #374151; width: 120px;">Name</td><td style="color: #111;">${name}</td></tr>
                <tr><td style="font-weight: 700; color: #374151;">Email</td><td style="color: #111;">${email}</td></tr>
                <tr><td style="font-weight: 700; color: #374151;">Phone</td><td style="color: #111;">${phone || 'N/A'}</td></tr>
                <tr><td style="font-weight: 700; color: #374151;">Service Interest</td><td style="color: #111;">${subject || 'Not specified'}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
              <h3 style="color: #1e3a8a; font-size: 14px; margin: 0 0 8px;">Message:</h3>
              <p style="color: #374151; line-height: 1.6; margin: 0;">${message}</p>
            </td>
          </tr>
          <tr>
            <td style="background: #f9fafb; padding: 16px 24px; text-align: center; font-size: 12px; color: #9ca3af;">
              This email was sent from the SS Globe Tech website contact form.
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
}
