"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function About() {
  const { contact } = resumeData;

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full" />

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-slate-600 text-lg leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            <div className="space-y-4">
              {contact.location && (
                <InfoRow label="Location" value={contact.location} />
              )}
              {contact.email && (
                <InfoRow label="Email" value={contact.email} />
              )}
              {contact.linkedin && (
                <InfoRow
                  label="LinkedIn"
                  value={contact.linkedin.replace("https://", "")}
                  href={contact.linkedin}
                />
              )}
              {contact.github && (
                <InfoRow
                  label="GitHub"
                  value={contact.github.replace("https://", "")}
                  href={contact.github}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="text-slate-400 font-medium min-w-[90px]">{label}:</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {value}
        </a>
      ) : (
        <span className="text-slate-700">{value}</span>
      )}
    </div>
  );
}
