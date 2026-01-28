"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput_01() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-xl w-full mx-auto">
        <Textarea
          id="ai-input-01"
          placeholder="Type your message..."
          className={cn(
            "max-w-xl bg-red-50 rounded-3xl pl-6 pr-16",
            "placeholder:text-red-400",
            "border border-red-300 ring-red-200",
            "text-red-700 text-wrap",
            "overflow-y-auto resize-none",
            "focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-0",
            "transition-[height] duration-100 ease-out",
            "leading-[1.2] py-[16px]",
            "min-h-[52px]",
            "max-h-[200px]"
          )}
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            adjustHeight();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleReset();
            }
          }}
        />

        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-xl bg-red-100 py-1 px-1 transition-all duration-200",
            inputValue ? "right-10" : "right-3"
          )}
        >
          <Mic className="w-4 h-4 text-red-500" />
        </div>
        <button
          onClick={handleReset}
          type="button"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-xl bg-red-100 py-1 px-1 transition-all duration-700",
            inputValue
              ? "block right-3 animate-slide-in cursor-pointer"
              : "hidden"
          )}
        >
          <CornerRightUp className="w-4 h-4 text-red-500 transition-opacity duration-700" />
        </button>
      </div>
    </div>
  );
}
