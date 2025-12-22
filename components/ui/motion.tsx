'use client';

import { motion, useInView, HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface MotionProps extends HTMLMotionProps<'div'> {
    delay?: number;
    duration?: number;
    viewportAmount?: number;
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, ...props }: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function SlideUp({ children, className, delay = 0, duration = 0.5, ...props }: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerChildren({ children, className, staggerDelay = 0.1, ...props }: MotionProps & { staggerDelay?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: { transition: { staggerChildren: staggerDelay } },
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
