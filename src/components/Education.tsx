"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/data/resumeData";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mb-10 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  {edu.logoUrl && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${edu.logoUrl}`}
                      alt={edu.institution}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain rounded mt-0.5 shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {edu.url ? (
                        <a
                          href={edu.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {edu.institution}
                        </a>
                      ) : (
                        edu.institution
                      )}
                    </p>
                    {edu.details && (
                      <p className="text-slate-500 mt-1">{edu.details}</p>
                    )}
                  </div>
                </div>
                <div className="text-sm text-slate-500 mt-2 md:mt-0">
                  {edu.startDate} — {edu.endDate}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
