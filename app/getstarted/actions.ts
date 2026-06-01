"use server";

export async function submitGetStarted(data: {
  name: string;
  email: string;
  company: string;
  spend: string;
}): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.error("LOOPS_API_KEY is not set");
    return { success: false, error: "Configuration error." };
  }

  const [firstName, ...rest] = data.name.trim().split(" ");
  const lastName = rest.join(" ") || undefined;

  const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email: data.email,
      firstName,
      ...(lastName && { lastName }),
      companyName: data.company,
      aiSpendRange: data.spend,
      source: "getstarted",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Loops API error:", res.status, body);
    return { success: false, error: "Could not save your details. Please try again." };
  }

  return { success: true };
}
