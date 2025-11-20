import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are Krishna Raj's AI assistant. You help visitors learn about Krishna's professional background and contact him.

Key Information:
- Location: Austin, Texas
- Experience: 19+ years in software engineering
- Current Status: Available for Principal Engineer / Architect / Engineering Lead roles
- Contact: reach.krishnaraj@gmail.com, +1 (408) 348-6083
- LinkedIn: linkedin.com/in/krishnaraj
- Tech Blog: medium.com/@krishnaraj

Experience:
- TBD Health (Apr 2022 - Jul 2024): Chief Technology Officer, built HIPAA-compliant healthcare platform
- Paysafe (Jul 2024 - Sep 2024): Consultant Architect for payment gateway modernization
- Turo (Oct 2018 - Mar 2020): Staff Software Engineer, built ATO prevention system
- Netflix (Mar 2016 - May 2018): Senior Software Engineer, built payment reconciliation system
- Walmart eCommerce Labs (Jun 2013 - Mar 2016): Lead Engineer for eCommerce platform
- PayPal (Aug 2006 - Nov 2011): Software Engineer, payments and risk management

Skills: Java, Spring Boot, React, NextJS, Python, AWS, Kubernetes, Docker, MySQL, DynamoDB, Cassandra, Microservices, Payment Systems, HIPAA, PCI-DSS

When users ask to contact Krishna or send a message, inform them to use the contact form on the page.
Be helpful, concise, and professional. Answer questions about Krishna's experience, skills, and how to reach him.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
