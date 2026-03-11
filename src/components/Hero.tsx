"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          {resumeData.avatarUrl && !imgError ? (
            <div className="mx-auto mb-8 w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30 ring-offset-2 ring-offset-slate-900">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${resumeData.avatarUrl}`}
                alt={resumeData.name}
                width={320}
                height={320}
                sizes="160px"
                className="object-cover w-full h-full"
                onError={() => setImgError(true)}
                priority
              />
            </div>
          ) : (
            <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold shadow-2xl ring-4 ring-blue-500/30">
              {resumeData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {resumeData.name}
          </h1>

          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
            {resumeData.title}
          </p>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {resumeData.summary}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#experience"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-600 text-slate-300 hover:border-blue-500 hover:text-white rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
