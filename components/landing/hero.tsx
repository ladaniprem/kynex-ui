"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import TailwindCSS from "@/components/icons/tailwindcss";
import {
  Sparkles,
} from "lucide-react";

import { Btn14 } from "../Kriyexui/button/btn-14";
import Btn03 from "../Kriyexui/button/btn-03";
import Input09 from "../Kriyexui/input/input-09";
import AIInput_04 from "../Kriyexui/ai-input/ai-input-04";

import Card08 from "../Kriyexui/card/card-08";
import Card02 from "../Kriyexui/card/card-02";

import { BrowseBlocksButton } from "../ui/browse-blocks";
import { BrowseComponentsButton } from "../ui/browse-button";
import Features from "./feature-block";
import TerminalCard from "../layout/TerminalCard";

export function HeroSection() {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      
      {/* ================= LEFT SIDE ================= */}
      <div className="w-full lg:w-[45%] flex flex-col items-start space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-100">
            Craft with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 dark:from-rose-400 dark:via-red-400 dark:to-orange-400">
              precision
            </span>
            <br />
            build with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 dark:from-red-400 dark:via-rose-400 dark:to-orange-400">
              ease
            </span>
            .
          </h1>

          <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            A curated collection of{" "}
            <span className="font-semibold">100+ premium UI components</span>{" "}
            crafted with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-red-500 dark:from-rose-400 dark:to-red-400">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-400 dark:to-orange-400">
              shadcn/ui
            </span>{" "}
            for modern React and Next.js applications.
          </p>
        </motion.div>

        {/* Tailwind Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 flex items-center gap-2">
            <TailwindCSS className="w-4 h-4" />
            Now updated for Tailwind CSS 4.0
            <span className="inline-flex items-center rounded-md bg-rose-50 dark:bg-rose-900/30 px-2 py-1 text-xs font-medium text-rose-700 dark:text-rose-300">
              <Sparkles className="h-3 w-3 mr-1" />
              New
            </span>
          </span>

          <div className="flex flex-col sm:flex-row gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>

        <Features />
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:pl-8">
        
        {/* ---------- TOP ROW ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card with Image Backdrop */}
       <div
  className="
    relative rounded-xl
    border border-zinc-200 dark:border-zinc-800
    hover:border-rose-400/50 dark:hover:border-rose-500/40
    transition-colors
    overflow-hidden
  "
>
  <div className="relative z-10 p-4">
    <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
      {"< Card />"}
    </span>

    {/* Layout isolation wrapper */}
    <div className="flex justify-center">
      <Link
        href="/docs/components/card"
        className="block w-full max-w-[280px]"
      >
        {/* Transform-safe wrapper */}
        <div className="will-change-transform overflow-hidden rounded-lg">
          <Card08 />
        </div>
      </Link>
    </div>
  </div>
</div>


      {/* Components Search */}
<motion.div>
  <div
    className="
      relative overflow-hidden rounded-xl
      border border-zinc-200 dark:border-zinc-800
      hover:border-rose-400/50 dark:hover:border-rose-500/40
      transition-colors p-4
      bg-white dark:bg-zinc-950
    "
  >
    <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-4">
      Terminal
    </span>

    <div className="rounded-lg overflow-hidden">
      <TerminalCard />
    </div>
  </div>
</motion.div>

        </motion.div>

        {/* ---------- AI CHAT ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-48 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-rose-400/50 dark:hover:border-rose-500/40 transition-colors"
        >
          <div className="relative z-10 h-full flex items-center justify-center">
            <AIInput_04 />
          </div>
        </motion.div>

        {/* ---------- BOTTOM ROW ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Buttons */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-400/50 dark:hover:border-rose-500/40 transition-colors p-4 flex flex-col items-center justify-center gap-3">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              Buttons
            </span>
            <Link href="/docs/components/button">
              <Btn14 label="Bring me" className="w-42 py-5" />
            </Link>
            <Link href="/docs/components/button">
              <Btn03 className="w-42 py-5" />
            </Link>
          </div>

          {/* Input */}
          <div className=" relative overflow-hidden rounded-xl
      border border-zinc-200 dark:border-zinc-800
      hover:border-rose-400/50 dark:hover:border-rose-500/40
      transition-colors p-4
      bg-white dark:bg-zinc-950">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Views
            </span>
            <Link href="/docs/components/input">
              <Input09 />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
