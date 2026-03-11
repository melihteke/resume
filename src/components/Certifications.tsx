"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/data/resumeData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-10 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              {cert.logoUrl ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${cert.logoUrl}`}
                  alt={`${cert.issuer} logo`}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain mb-4"
                />
              ) : (
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
              )}
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {cert.name}
              </h3>
              <p className="text-blue-600 font-medium text-sm">{cert.issuer}</p>
              <p className="text-slate-400 text-sm mt-1">{cert.date}</p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm text-blue-600 hover:underline"
                >
                  View Credential →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
