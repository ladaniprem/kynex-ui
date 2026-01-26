"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, Chrome, Github, Twitter, ArrowRight } from "lucide-react";

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
        <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-red-950 dark:via-black dark:to-red-900">
            <div className="w-full max-w-md">
                {/* Header with Red Theme */}
                <div className="w-full h-32 mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <div className="text-3xl font-bold mb-1">Welcome</div>
                            <div className="text-red-100 text-sm">Sign in to continue</div>
                        </div>
                    </div>
                </div>

                <Card className="w-full border-red-200 shadow-xl dark:border-red-800 dark:shadow-red-900/20">
                    <CardHeader className="space-y-3 pb-6">
                        <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                            Sign In
                        </CardTitle>
                        <CardDescription className="text-center text-red-600 dark:text-red-400">
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-red-700 dark:text-red-300 font-medium">
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-red-500" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pl-10 border-red-200 focus:border-red-500 focus:ring-red-500 dark:border-red-700 dark:bg-red-950/50"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-red-700 dark:text-red-300 font-medium">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-red-500" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="pl-10 pr-10 border-red-200 focus:border-red-500 focus:ring-red-500 dark:border-red-700 dark:bg-red-950/50"
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 text-red-500 hover:text-red-600 hover:bg-red-50"
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

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                        className="border-red-300 text-red-600 focus:ring-red-500"
                                    />
                                    <Label htmlFor="remember" className="text-sm text-red-600 dark:text-red-400">
                                        Remember me
                                    </Label>
                                </div>
                                <Button
                                    type="button"
                                    variant="link"
                                    className="text-sm text-red-600 hover:text-red-700 p-0 h-auto"
                                >
                                    Forgot password?
                                </Button>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium shadow-lg hover:shadow-red-500/25 transition-all duration-200"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        Sign In
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Social Login Section */}
                        <div className="space-y-4">
                            <div className="relative">
                                <Separator className="bg-red-200 dark:bg-red-800" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="bg-white dark:bg-black px-2 text-xs text-red-600 dark:text-red-400">
                                        OR CONTINUE WITH
                                    </span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-3">
                                {socialProviders.map((provider) => {
                                    const Icon = provider.icon;
                                    return (
                                        <Button
                                            key={provider.name}
                                            variant="outline"
                                            className="border-red-200 hover:border-red-300 hover:bg-red-50 dark:border-red-700 dark:hover:bg-red-950/50 dark:hover:border-red-600 transition-all duration-200"
                                        >
                                            <Icon className="h-4 w-4 text-red-600 dark:text-red-400" />
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-red-600 dark:text-red-400">
                                Don't have an account?{" "}
                                <Button
                                    variant="link"
                                    className="text-red-600 hover:text-red-700 p-0 h-auto font-medium"
                                >
                                    Sign up
                                </Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
