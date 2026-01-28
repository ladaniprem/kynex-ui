"use client";

import { cn } from "@/lib/utils";

interface BufferSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dots" | "pulse";
}

export function BufferSpinner({ 
  className = "", 
  size = "md",
  variant = "default"
}: BufferSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1", className)}>
        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("animate-pulse bg-muted rounded", sizeClasses[size], className)}></div>
    );
  }

  return (
    <div 
      className={cn(
        "animate-spin rounded-full border-2 border-muted border-t-current",
        sizeClasses[size],
        className
      )}
    />
  );
}

export default BufferSpinner;
