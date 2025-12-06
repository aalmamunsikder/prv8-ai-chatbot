"use client";

import React from 'react';
import { CalendarWidget } from '@/components/dashboard/CalendarWidget';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Placeholder full page
export default function ItineraryPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <SectionHeading title="Itinerary" subtitle="Your Timeline" className="mb-0" />
                <div className="text-sm text-white/40">Upcoming: Miami Design Week</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                        <img
                            src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1000&auto=format&fit=crop"
                            alt="Miami Map"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl font-serif text-white">Visual Route</h3>
                        </div>
                    </div>
                    <CalendarWidget />
                </div>

                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border border-white/5">
                        <h4 className="text-lg font-serif text-white mb-4">Quick Actions</h4>
                        <div className="space-y-3">
                            {['Add Event', 'Share Itinerary', 'Export PDF', 'Contact Driver'].map(action => (
                                <button key={action} className="w-full text-left px-4 py-3 rounded-xl bg-white/5 hover:bg-primary/20 hover:text-primary text-white/60 transition-colors text-sm">
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
