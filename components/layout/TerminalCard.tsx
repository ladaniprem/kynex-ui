"use client";
import React, { useEffect, useState } from "react";

/* ---------------- TERMINAL DATA ---------------- */

const steps = [
  {
    command: 'import React from "react"',
    output: ["✓ react module resolved"],
    color: "text-[#ff6b6b]",
  },
  {
    command: 'import { useState } from "react"',
    output: ["✓ hooks initialized"],
    color: "text-[#ff8787]",
  },
  {
    command: "const app = createApp()",
    output: ["✓ app instance created"],
    color: "text-[#ff4d4d]",
  },
  {
    command: "app.start()",
    output: [
      "✓ compiling modules...",
      "✓ compiled successfully",
      "✓ server running on http://localhost:3000",
    ],
    color: "text-[#ffa94d]",
  },
];

const TYPING_SPEED = 70;
const COMMAND_DELAY = 1200;
const LOOP_DELAY = 2500;

/* ---------------- TERMINAL CARD ---------------- */

const TerminalCard = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (stepIndex === -1) return;

    const step = steps[stepIndex];
    const text = step.command;

    if (charIndex < text.length) {
      const t = setTimeout(() => {
        setCurrentText((p) => p + text[charIndex]);
        setCharIndex((i) => i + 1);
      }, TYPING_SPEED);

      return () => clearTimeout(t);
    }

    const done = setTimeout(() => {
      setHistory((prev) => [
        ...prev,
        `${step.color}|${step.command}`,
        ...step.output.map((o) => `text-[#b8a1a1]|${o}`),
      ]);

      setCurrentText("");
      setCharIndex(0);
      setStepIndex((i) => (i === steps.length - 1 ? -1 : i + 1));
    }, COMMAND_DELAY);

    return () => clearTimeout(done);
  }, [charIndex, stepIndex]);

  useEffect(() => {
    if (stepIndex === -1) {
      const loop = setTimeout(() => {
        setHistory([]);
        setStepIndex(0);
      }, LOOP_DELAY);

      return () => clearTimeout(loop);
    }
  }, [stepIndex]);

  return (
    <div className="max-w-[32em] w-[32em] h-[26em] bg-[#140a0a] rounded-xl shadow-[0_1em_3em_rgba(255,0,0,0.15)] border border-[#2a0f0f] overflow-hidden flex flex-col">
      
      {/* Header */}
      <div className="h-10 bg-[#2a0f0f] flex items-center px-4">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      {/* Terminal */}
      <div className="flex-1 p-4 font-mono text-sm text-[#f5eaea] overflow-hidden">
        {history.map((line, i) => {
          const [color, text] = line.split("|");
          return (
            <div key={i} className={color}>
              {text}
            </div>
          );
        })}

        {stepIndex !== -1 && (
          <div className={steps[stepIndex].color}>
            {currentText}
            <span className="inline-block ml-1 w-2 h-4 bg-[#ff4d4d] animate-pulse align-middle" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalCard;