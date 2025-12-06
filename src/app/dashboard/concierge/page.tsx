"use client";

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function ConciergePage() {
    return (
        <div className="h-[calc(100vh-140px)] flex flex-col">
            <div className="flex justify-between items-end mb-6">
                <SectionHeading title="Concierge" subtitle="Val8 AI" className="mb-0" />
            </div>

            <div className="flex-1 glass-card rounded-3xl overflow-hidden border border-white/5 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 animate-pulse">
                    <span className="font-serif text-3xl text-primary">V</span>
                </div>
                <h3 className="text-2xl text-white font-serif mb-2">How may I assist you today?</h3>
                <p className="text-white/40 max-w-md">
                    I can help you adjust your itinerary, make reservations, or answer any questions about your membership.
                </p>

                {/* This would be the full chat interface */}
                <div className="mt-8 w-full max-w-2xl">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Type request..."
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                        />
                        <button className="absolute right-2 top-2 p-2 bg-primary text-surface rounded-full hover:bg-white transition-colors">
                            <span className="sr-only">Send</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
