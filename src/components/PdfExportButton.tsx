"use client";

import { useState } from "react";

export default function PdfExportButton({
  className,
  label = "Download PDF",
}: {
  className?: string;
  label?: string;
}) {
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    setGenerating(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("print-resume");
      if (!element) {
        setGenerating(false);
        return;
      }

      const opt = {
        margin: [8, 0, 10, 0],
        filename: "Melih_Teke_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          width: 794,
          windowWidth: 794,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
        pagebreak: { mode: ["css", "legacy"] },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={generating}
      className={
        className ||
        "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors cursor-pointer disabled:opacity-50"
      }
    >
      {generating ? "Generating..." : label}
    </button>
  );
}
