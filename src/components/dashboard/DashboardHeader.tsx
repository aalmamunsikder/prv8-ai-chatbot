"use client";

import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const DashboardHeader: React.FC = () => {
    const { user } = useAuth();

    return (
        <header className="h-20 px-8 border-b border-white/5 flex items-center justify-between bg-bg/50 backdrop-blur-md sticky top-0 z-40">
            {/* Search */}
            <div className="relative w-96 hidden md:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                    type="text"
                    placeholder="Search itinerary, flights, or ask Val8..."
                    className="w-full bg-white/5 border border-white/5 rounded-full pl-12 pr-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
                <button className="relative text-white/40 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </button>

                <div className="h-8 w-[1px] bg-white/10" />

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">{user?.name || 'Member'}</p>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider">Lumina Noir</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary font-serif italic text-lg hover:bg-primary hover:text-surface transition-colors cursor-pointer">
                        {user?.name?.[0] || 'M'}
                    </div>
                </div>
            </div>
        </header>
    );
};
