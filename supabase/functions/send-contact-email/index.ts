import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

// HTML escaping function to prevent XSS
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData = await req.json();
    
    // Validate input
    const validationResult = contactSchema.safeParse(requestData);
    
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input data",
          details: validationResult.error.errors.map(e => e.message)
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, message } = validationResult.data;

    // Sanitize inputs for HTML email
    const sanitizedName = escapeHtml(name);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Send notification to Krishna
    const notificationResponse = await resend.emails.send({
      from: "Krishna Raj <hello@resume.kraj.me>",
      to: ["reach.krishnaraj@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This email was sent from your portfolio contact form.</p>
      `,
    });

    // Send confirmation to the user
    const confirmationResponse = await resend.emails.send({
      from: "Krishna Raj <hello@resume.kraj.me>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <h2>Thank you for reaching out, ${sanitizedName}!</h2>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${sanitizedMessage}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This is an automated confirmation from the portfolio contact form.</p>
      `,
    });

    return new Response(JSON.stringify({ 
      notification: notificationResponse, 
      confirmation: confirmationResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
