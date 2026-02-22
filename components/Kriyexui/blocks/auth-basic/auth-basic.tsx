"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, Chrome, Github, Twitter, ArrowRight, User } from "lucide-react";

export default function AuthBasic() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    const socialProviders = [
        { name: "Google", icon: Chrome },
        { name: "GitHub", icon: Github },
        { name: "Twitter", icon: Twitter },
    ];

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-neutral-50 dark:bg-neutral-950">
            <div className="w-full max-w-md">
                {/* Modern Header with Geometric Design */}
                <div className="w-full mb-8 relative">
                    <div className="relative h-24 bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/5 dark:bg-grid-black/5"></div>
                        <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 dark:bg-black/10 rounded-full backdrop-blur-sm"></div>
                        <div className="absolute bottom-2 left-2 w-12 h-12 bg-white/5 dark:bg-black/5 rounded-lg backdrop-blur-sm"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <div className="w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg">
                                        <User className="h-6 w-6 text-neutral-900 dark:text-neutral-100" />
                                    </div>
                                </div>
                                <div className="text-white dark:text-neutral-900 text-xl font-bold">Welcome Back</div>
                                <div className="text-neutral-300 dark:text-neutral-700 text-sm">Enter your space</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="w-full border-0 shadow-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl">
                    <CardHeader className="space-y-4 pb-8">
                        <div className="text-center space-y-2">
                            <CardTitle className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                                Sign In
                            </CardTitle>
                            <CardDescription className="text-neutral-600 dark:text-neutral-400 text-base">
                                Access your personal workspace
                            </CardDescription>
                        </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm uppercase tracking-wide">
                                        Email Address
                                    </Label>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg transition-all duration-200 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700"></div>
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 z-10" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="relative pl-12 pr-4 h-12 border-0 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 z-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm uppercase tracking-wide">
                                        Password
                                    </Label>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg transition-all duration-200 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700"></div>
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 z-10" />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="relative pl-12 pr-12 h-12 border-0 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 z-10"
                                            required
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 z-10"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                        className="border-neutral-300 text-neutral-900 focus:ring-neutral-900 dark:border-neutral-600 dark:text-neutral-100 dark:focus:ring-neutral-100"
                                    />
                                    <Label htmlFor="remember" className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                                        Remember this device
                                    </Label>
                                </div>
                                <Button
                                    type="button"
                                    variant="link"
                                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 p-0 h-auto font-medium underline-offset-4"
                                >
                                    Forgot password?
                                </Button>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-3">
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-3">
                                        Sign In
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Social Login Section */}
                        <div className="space-y-6">
                            <div className="relative">
                                <Separator className="bg-neutral-200 dark:bg-neutral-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="bg-white dark:bg-neutral-900 px-4 text-xs text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wide">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4">
                                {socialProviders.map((provider) => {
                                    const Icon = provider.icon;
                                    return (
                                        <Button
                                            key={provider.name}
                                            variant="outline"
                                            className="h-12 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:border-neutral-600 transition-all duration-200 group"
                                        >
                                            <Icon className="h-5 w-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="text-center pt-4 border-t border-neutral-200 dark:border-neutral-700">
                            <p className="text-neutral-600 dark:text-neutral-400">
                                New to our platform?{" "}
                                <Button
                                    variant="link"
                                    className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300 p-0 h-auto font-semibold underline-offset-4"
                                >
                                    Create account
                                </Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
