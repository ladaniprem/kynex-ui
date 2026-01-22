"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="cursor-pointer text-red-500 dark:text-red-400"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
        >
            {theme === "light" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon
                    className="h-5 w-5 rotate-180"
                />
            )}
        </div>
    );
}
