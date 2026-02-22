"use client";

import { motion } from "motion/react";
import { type Product } from "./data";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductGridProps {
    products: Product[];
    onProductSelect: (product: Product) => void;
}

export function ProductGrid({ products, onProductSelect }: ProductGridProps) {
    const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

    const toggleLike = (e: React.MouseEvent, productId: string) => {
        e.stopPropagation();
        setLikedItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(productId)) {
                newSet.delete(productId);
            } else {
                newSet.add(productId);
            }
            return newSet;
        });
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" suppressHydrationWarning>
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    layoutId={`product-${product.id}`}
                    onClick={() => onProductSelect(product)}
                    className="group cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    suppressHydrationWarning
                >
                    <div className="relative aspect-[4/5] bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                        {/* Product Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                            />
                        </div>
                        
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                <button
                                    onClick={(e) => toggleLike(e, product.id)}
                                    className="flex-1 p-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                >
                                    <Heart 
                                        className={`w-4 h-4 ${likedItems.has(product.id) ? 'fill-red-500 text-red-500' : 'text-zinc-700'}`} 
                                    />
                                </button>
                                <button className="flex-1 p-2 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                    <ShoppingCart className="w-4 h-4 text-zinc-700" />
                                </button>
                            </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-zinc-700 rounded-full">
                                {product.category}
                            </span>
                        </div>

                        {/* New Badge */}
                        {product.id === 'p1' && (
                            <div className="absolute top-3 right-3">
                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                    NEW
                                </span>
                            </div>
                        )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="mt-3 space-y-2">
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 line-clamp-2">
                            {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                                ₹{product.price}
                            </p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-zinc-300 text-zinc-300'}`}
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-xs text-zinc-500 ml-1">(4.0)</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
} 