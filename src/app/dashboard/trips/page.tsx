"use client";

import React from 'react';
import { FlightWidget } from '@/components/dashboard/FlightWidget';
import { StayWidget } from '@/components/dashboard/StayWidget';
import { RideWidget } from '@/components/dashboard/RideWidget';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function TripsPage() {
    return (
        <div className="space-y-8">
            <SectionHeading title="Active Trips" subtitle="Logistics" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <FlightWidget />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <RideWidget />
                        <div className="glass-card p-6 rounded-3xl border border-white/5 flex items-center justify-center text-white/30 text-xs uppercase tracking-widest border-dashed">
                            Add Transport
                        </div>
                    </div>
                </div>

                <div>
                    <StayWidget />
                </div>
            </div>
        </div>
    );
}
