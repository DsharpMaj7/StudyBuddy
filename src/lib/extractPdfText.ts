import "server-only";

import { extractText } from "unpdf";

export async function extractTextFromPdfBuffer(buffer: Buffer) {
  try {
    const { text } = await extractText(new Uint8Array(buffer), {
      mergePages: true,
    });

    const normalizedText = text.trim();

    if (!normalizedText) {
      throw new Error("No text extracted from PDF.");
    }

    return normalizedText;
  } catch (err) {
    console.error("PDF parse failed:", err);
    throw new Error(
      "Could not extract text from this PDF. It may be image-based."
    );
  }
}
