import "server-only";

/**
 * PDF parsing runs only on the server.
 */
export async function extractTextFromPdfBuffer(buffer: Buffer): Promise<string> {
  try {
    console.log("PDF parse start, buffer length:", buffer.length);

    const mod = await import("pdf-parse");
    console.log("Imported pdf-parse module keys:", Object.keys(mod));

    const pdfParse = (mod as any).default ?? mod;
    const result = await pdfParse(buffer);

    console.log("PDF parse result keys:", Object.keys(result || {}));

    if (!result?.text?.trim()) {
      throw new Error("No text extracted from PDF.");
    }

    return result.text;
  } catch (err) {
    console.error("PDF parse failed:", err);
    throw new Error("Could not extract text from this PDF. It may be image-only (scanned) or protected.");
  }
}
