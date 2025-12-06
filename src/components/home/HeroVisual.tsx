"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plane, Star, ShieldCheck } from 'lucide-react';

export const HeroVisual: React.FC = () => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none select-none">

            {/* Circle Glow Backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse" />

            {/* CARD 1: Back (Abstract/Texture) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -15, y: 50 }}
                animate={{ opacity: 0.6, scale: 1, rotate: -6, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="absolute w-72 h-96 glass-heavy rounded-3xl border border-white/10 overflow-hidden z-10"
                style={{ transformOrigin: 'bottom right' }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-[10px] uppercase tracking-widest text-white/40">Encryption Active</span>
                    </div>
                    <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-primary" />
                    </div>
                </div>
            </motion.div>

            {/* CARD 2: Middle (Visual/Experience) */}
            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                animate={{ opacity: 1, x: 20, rotate: 6 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="absolute w-72 h-96 glass-card rounded-3xl border border-white/20 overflow-hidden z-20 shadow-2xl"
                style={{ right: '15%' }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1000&auto=format&fit=crop"
                    alt="Luxury Travel"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-full">
                    <Plane className="w-4 h-4 text-white" />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-2 py-1 rounded bg-primary/20 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                        Confirmed
                    </span>
                    <h3 className="text-xl font-serif text-white mb-1">G650ER to Monaco</h3>
                    <p className="text-white/60 text-xs">Departing 09:00 AM • Teterboro</p>
                </div>
            </motion.div>

            {/* CARD 3: Front (Status/Interactive) */}
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 60, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
                className="absolute bottom-[20%] -left-[5%] w-64 h-auto glass-card backdrop-blur-xl p-5 rounded-2xl border border-white/20 z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium text-sm">Access Granted</h4>
                        <p className="text-white/40 text-xs">Tier: Lumina Noir</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-white/60">Concierge</span>
                        <span className="text-green-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Online
                        </span>
                    </div>
                    <div className="h-px w-full bg-white/5" />
                    <div className="flex justify-between text-xs">
                        <span className="text-white/60">Next Event</span>
                        <span className="text-white">Met Gala &apos;25</span>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};
