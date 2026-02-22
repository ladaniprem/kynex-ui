"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface Btn03Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

export default function Btn03({
    className,
    particleCount = 12,
    attractRadius = 50,
    ...props
}: Btn03Props) {
    const [isAttracting, setIsAttracting] = useState(false);
    const generateParticles = useCallback(
        () =>
            Array.from({ length: particleCount }, (_, i) => {
                // Use deterministic values based on index to avoid hydration mismatch
                const angle = (i / particleCount) * Math.PI * 2;
                const radius = 80 + (i % 3) * 20;
                return {
                    id: i,
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                };
            }),
        [particleCount]
    );
    const [particles, setParticles] = useState<Particle[]>(() => generateParticles());
    const particlesControl = useAnimation();

    useEffect(() => {
        setParticles(generateParticles());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i].x,
            y: particles[i].y,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    return (
        <Button
            className={cn(
                "min-w-40 relative touch-none",
                "bg-violet-100 dark:bg-violet-900",
                "hover:bg-violet-200 dark:hover:bg-violet-800",
                "text-violet-600 dark:text-violet-300",
                "border border-violet-300 dark:border-violet-700",
                "transition-all duration-300",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            {...props}
        >
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ x: particles[index].x, y: particles[index].y }}
                    animate={particlesControl}
                    className={cn(
                        "absolute w-1.5 h-1.5 rounded-full",
                        "bg-violet-400 dark:bg-violet-300",
                        "transition-opacity duration-300",
                        isAttracting ? "opacity-100" : "opacity-40"
                    )}
                />
            ))}
            <span className="relative w-full flex items-center justify-center gap-2">
                <Magnet
                    className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isAttracting && "scale-110"
                    )}
                />
                {isAttracting ? "Attracting" : "Hover me"}
            </span>
        </Button>
    );
}
