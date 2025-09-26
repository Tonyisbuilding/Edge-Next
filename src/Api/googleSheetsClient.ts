const FALLBACK_APP_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwSvGM7yHBWljRfUnWR2J7XPojXRjgQqcsDCaAjTMLd84C5uY_f3W3FEH1RkAj8o8eiPw/exec";

const APP_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ?? FALLBACK_APP_SCRIPT_URL;

type SubmitPayload = Record<string, unknown>;

interface SubmitOptions<TPayload extends object> {
  formSlug: string;
  payload: TPayload;
}

interface SheetResponse {
  ok: boolean;
  message?: string;
  [key: string]: unknown;
}

async function submitToGoogleSheet<TPayload extends object>({
  formSlug,
  payload,
}: SubmitOptions<TPayload>): Promise<SheetResponse> {
  if (!APP_SCRIPT_URL) {
    throw new Error("Missing VITE_GOOGLE_SCRIPT_URL.");
  }

  if (!import.meta.env.VITE_GOOGLE_SCRIPT_URL && FALLBACK_APP_SCRIPT_URL) {
    console.warn("VITE_GOOGLE_SCRIPT_URL not set. Using fallback endpoint.");
  }

  const response = await fetch(APP_SCRIPT_URL, {
    method: "POST",
    headers: {
      // ✅ simple request → no preflight
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      formSlug,
      ...(payload as SubmitPayload),
    }),
  });

  const data = (await response.json()) as SheetResponse;

  if (!response.ok || !data.ok) {
    const message =
      data?.message ||
      `Google Sheets error (${response.status}). Try again later.`;
    throw new Error(message);
  }

  return data;
}

export { submitToGoogleSheet };
export type { SheetResponse };
