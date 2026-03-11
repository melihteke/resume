"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mb-10 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:underline"
                  >
                    Source Code →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
