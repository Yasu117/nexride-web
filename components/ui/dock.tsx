"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MotionValue, motion, useMotionValue, useSpring, useAnimationFrame, type HTMLMotionProps, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export interface DockProps {
    className?: string;
    children: React.ReactNode;
    magnification?: number;
    distance?: number;
    baseWidth?: number;
}

export const Dock = ({
    className,
    children,
    magnification = 60,
    distance = 140,
    baseWidth = 40,
}: DockProps) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    mouseX,
                    magnification,
                    distance,
                    baseWidth,
                } as DockIconProps);
            }
            return child;
        });
    };

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 items-end gap-2 rounded-2xl bg-gray-50/50 px-4 pb-3 backdrop-blur-md border border-gray-200",
                className
            )}
        >
            {renderChildren()}
        </motion.div>
    );
};

export interface DockIconProps extends Omit<HTMLMotionProps<"div">, "children"> {
    magnification?: number;
    distance?: number;
    baseWidth?: number;
    mouseX?: MotionValue;
    children: React.ReactNode;
    title?: string;
    description?: string | string[];
    tags?: string[];
    stats?: string;
    year?: string;
}

export const DockIcon = ({
    magnification = 60,
    distance = 140,
    baseWidth = 40,
    mouseX,
    className,
    children,
    style,
    title,
    description,
    tags,
    stats,
    year,
    ...props
}: DockIconProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const width = useMotionValue(baseWidth);
    const [isHovered, setHovered] = useState(false);
    const [mounted, setMounted] = useState(false);

    const tooltipLeft = useMotionValue(0);
    const tooltipTop = useMotionValue(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const widthSpring = useSpring(width, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    useAnimationFrame(() => {
        if (!mouseX) return;
        const mouseXVal = mouseX.get();

        if (mouseXVal === Infinity) {
            width.set(baseWidth);
        } else {
            const rect = ref.current?.getBoundingClientRect();
            if (rect) {
                const iconCenterX = rect.left + rect.width / 2;
                const distanceFromMouse = Math.abs(mouseXVal - iconCenterX);

                if (distanceFromMouse > distance) {
                    width.set(baseWidth);
                } else {
                    const ratio = 1 - distanceFromMouse / distance;
                    const targetWidth = baseWidth + (magnification - baseWidth) * ratio;
                    width.set(targetWidth);
                }
            }
        }

        if (isHovered && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            tooltipLeft.set(rect.left + rect.width / 2);
            tooltipTop.set(rect.top);
        }
    });

    return (
        <>
            <motion.div
                ref={ref}
                style={{ width: widthSpring, ...style }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={cn(
                    "aspect-square cursor-pointer rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors relative",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
            {mounted && createPortal(
                <AnimatePresence>
                    {isHovered && (title || description) && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.6 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.6 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            style={{
                                left: tooltipLeft,
                                top: tooltipTop,
                                x: "-50%",
                                y: "-100%",
                                transformOrigin: "center bottom",
                            }}
                            className="fixed w-64 p-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-2xl border border-gray-200 z-[9999] pointer-events-none mb-2"
                        >
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex flex-col">
                                    {year && (
                                        <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-0.5">
                                            {year}
                                        </span>
                                    )}
                                    {title && (
                                        <h3 className="text-sm font-bold text-gray-900 leading-tight">
                                            {title}
                                        </h3>
                                    )}
                                </div>
                                {stats && (
                                    <span className="flex-shrink-0 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">
                                        {stats}
                                    </span>
                                )}
                            </div>

                            {description && (
                                <div className="text-xs text-gray-600 leading-relaxed mb-3">
                                    {Array.isArray(description) ? (
                                        <ul className="list-disc list-inside space-y-1">
                                            {description.map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{description}</p>
                                    )}
                                </div>
                            )}

                            {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded-md border border-gray-200 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};
