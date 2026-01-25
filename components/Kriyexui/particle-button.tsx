"use client";

import { useState, useRef, type RefObject, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ParticleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    onSuccess?: () => void;
    successDuration?: number;
    className?: string;
}

function SuccessParticles({
    buttonRef,
    particleOffsets,
}: {
    buttonRef: React.RefObject<HTMLButtonElement>;
    particleOffsets: { x: number; y: number }[];
}) {
    const [center, setCenter] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCenter({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        }
    }, [buttonRef]);

    if (!center) return null;

    return (
        <AnimatePresence>
            {particleOffsets.map((offset, i) => (
                <motion.div
                    key={i}
                    className="fixed w-1 h-1 bg-black dark:bg-white rounded-full"
                    style={{ left: center.x, top: center.y }}
                    initial={{
                        scale: 0,
                        x: 0,
                        y: 0,
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        x: [0, offset.x],
                        y: [0, offset.y],
                    }}
                    transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "easeOut",
                    }}
                />
            ))}
        </AnimatePresence>
    );
}

export default function ParticleButton({
    children,
    onClick,
    onSuccess,
    successDuration = 1000,
    className,
    ...props
}: ParticleButtonProps) {
    const [showParticles, setShowParticles] = useState(false);
    const [particleOffsets, setParticleOffsets] = useState<{ x: number; y: number }[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const generateOffsets = () => {
        return [...Array(6)].map((_, i) => ({
            x: (i % 2 ? 1 : -1) * (Math.random() * 50 + 20),
            y: -Math.random() * 50 - 20,
        }));
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setParticleOffsets(generateOffsets());
        setShowParticles(true);

        if (onClick) {
            onClick(e);
        }
        if (onSuccess) {
            onSuccess();
        }

        setTimeout(() => {
            setShowParticles(false);
        }, successDuration);
    };

    return (
        <>
            {showParticles && (
                <SuccessParticles
                    buttonRef={buttonRef as RefObject<HTMLButtonElement>}
                    particleOffsets={particleOffsets}
                />
            )}
            <Button
                ref={buttonRef}
                onClick={handleClick}
                className={cn(
                    "relative",
                    showParticles && "scale-95",
                    "transition-transform duration-100",
                    className
                )}
                {...props}
            >
                {children}
                <MousePointerClick className="h-4 w-4" />
            </Button>
        </>
    );
}
