"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-10 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

          <div className="space-y-10">
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-4 ring-blue-100" />

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div className="flex items-start gap-3">
                      {exp.logoUrl && (
                        <Image
                          src={exp.logoUrl}
                          alt={exp.company}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain rounded mt-0.5 shrink-0"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}{" "}
                          <span className="text-slate-400 font-normal">
                            · {exp.type}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 mt-1 md:mt-0 md:text-right shrink-0">
                      <p>
                        {exp.startDate} — {exp.endDate}
                      </p>
                      <p className="text-slate-400">{exp.location}</p>
                    </div>
                  </div>

                  {exp.bullets.length > 0 && (
                    <ul className="space-y-2 mt-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-slate-600">
                          <span className="text-blue-500 mt-1.5 shrink-0">
                            •
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
