"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const checked = theme === "dark";

    return (
        <div className="fixed top-1 right-5 z-100">
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative inline-flex items-center justify-center h-[36px] w-[36px] cursor-pointer rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
            >
                {checked ? (
                    <Moon className="h-5 w-5 text-red-400 transition-transform duration-300 rotate-0" />
                ) : (
                    <Sun className="h-5 w-5 text-red-500 transition-transform duration-300 rotate-0" />
                )}
            </button>
        </div>
    );
}
