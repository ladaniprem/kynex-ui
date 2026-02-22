"use client";
import { motion } from "motion/react";
import { X, Plus, Minus, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
import { type Product } from "./data";
import Image from "next/image";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}

export function ProductModal({
    product,
    onClose,
    onAddToCart,
}: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // Generate additional image variations for demonstration
    const productImages = [
        product.image,
        `${product.image}&auto=format&fit=crop&w=800&h=800`,
        `${product.image}&auto=format&fit=crop&w=800&h=800&blur=0`,
    ];

    const incrementQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
    const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={onClose}
            />
            <motion.div
                layoutId={`product-${product.id}`}
                className="fixed inset-x-4 bottom-0 md:inset-[10%] z-50 bg-white dark:bg-zinc-900 rounded-t-2xl md:rounded-2xl overflow-hidden max-h-[90vh] md:max-h-[85vh] shadow-2xl"
            >
                <div className="h-full flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/2 relative">
                        {/* Main Image */}
                        <div className="relative aspect-square md:aspect-auto md:h-full bg-zinc-50 dark:bg-zinc-800">
                            <Image
                                src={productImages[selectedImageIndex]}
                                alt={product.name}
                                fill
                                className="object-cover object-center"
                                sizes="(min-width: 768px) 50vw, 100vw"
                            />
                            
                            {/* Action Buttons */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsLiked(!isLiked);
                                    }}
                                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                >
                                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-zinc-700'}`} />
                                </button>
                                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                                    <Share2 className="w-4 h-4 text-zinc-700" />
                                </button>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                >
                                    <X className="w-4 h-4 text-zinc-700" />
                                </button>
                            </div>

                            {/* Image Thumbnails */}
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                {productImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                            selectedImageIndex === index
                                                ? 'border-zinc-900 dark:border-white'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        <Image
                                            src={productImages[index]}
                                            alt={`${product.name} view ${index + 1}`}
                                            fill
                                            className="object-cover object-center"
                                            sizes="20vw"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="md:w-1/2 p-6 flex flex-col overflow-y-auto">
                        <div className="flex-1">
                            {/* Product Header */}
                            <div className="mb-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                                            {product.name}
                                        </h1>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                            {product.category}
                                        </p>
                                    </div>
                                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                        ₹{product.price}
                                    </p>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-zinc-300 text-zinc-300'}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">4.0 (128 reviews)</span>
                                </div>

                                {/* Description */}
                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                        <Truck className="w-4 h-4" />
                                        <span>Free shipping on orders over ₹500</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                        <Shield className="w-4 h-4" />
                                        <span>2-year warranty included</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                        <RotateCcw className="w-4 h-4" />
                                        <span>30-day return policy</span>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500 dark:text-zinc-400">SKU:</span>
                                        <span className="text-zinc-900 dark:text-zinc-100">{product.id}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500 dark:text-zinc-400">Availability:</span>
                                        <span className="text-green-600 dark:text-green-400">In Stock</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500 dark:text-zinc-400">Category:</span>
                                        <span className="text-zinc-900 dark:text-zinc-100">{product.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Purchase Section */}
                        <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Quantity:</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={decrementQuantity}
                                        className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-8 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={incrementQuantity}
                                        className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Total: ₹{product.price * quantity}
                                </span>
                            </div>

                            <button
                                onClick={() => onAddToCart(product)}
                                className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                            >
                                Add to Cart - ₹{product.price * quantity}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
