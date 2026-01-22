"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Nextjs from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import ShadcnIcon from "@/components/icons/shadcn";

type FeatureItemProps = {
  label: string;
  delay: number;
  hoveredItem: string | null;
  setHoveredItem: (value: string | null) => void;
  className?: string;
  children: React.ReactNode;
};

function FeatureItem({
  label,
  delay,
  hoveredItem,
  setHoveredItem,
  className = "",
  children,
}: FeatureItemProps) {
  const isActive = hoveredItem === label;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseEnter={() => setHoveredItem(label)}
      onMouseLeave={() => setHoveredItem(null)}
      className={`flex flex-col items-center gap-2 ${className}`}
    >
      {children}

      <motion.span
        animate={{ scale: isActive ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`text-xs whitespace-nowrap text-black dark:text-white ${
          isActive ? "font-medium" : "font-normal"
        }`}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export default function Features() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-8 py-4">
        {/* TailwindCSS */}
        <FeatureItem
          label="TailwindCSS"
          delay={0.1}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        >
          <svg viewBox="0 0 54 33" className="w-8 h-8">
            <path
              fill="#38bdf8"
              fillRule="evenodd"
              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
              clipRule="evenodd"
            />
          </svg>
        </FeatureItem>

        {/* Motion */}
        <FeatureItem
          label="Motion"
          delay={0.25}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          className="text-yellow-500"
        >
          <span className="text-2xl">⚡</span>
        </FeatureItem>

        {/* shadcn/ui */}
        <FeatureItem
          label="shadcn/ui"
          delay={0.4}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        >
          <ShadcnIcon className="w-8 h-8 text-black dark:text-white" />
        </FeatureItem>

        {/* Next.js */}
        <FeatureItem
          label="Next.js"
          delay={0.55}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        >
          <Nextjs className="w-8 h-8" />
        </FeatureItem>

        {/* React */}
        <FeatureItem
          label="React"
          delay={0.7}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        >
          <ReactIcon className="w-8 h-8" />
        </FeatureItem>
      </div>
    </div>
  );
}
