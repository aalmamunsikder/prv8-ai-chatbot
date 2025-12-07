"use client";

import React from 'react';
import { Plane, Coffee, Car, Check, X } from 'lucide-react';

const requests = [
    { id: 1, type: 'Flight', title: 'LHR to DXB', user: 'Alexander V.', time: '2m ago', icon: Plane },
    { id: 2, type: 'Dining', title: 'Nobu Downtown', user: 'Emma W.', time: '15m ago', icon: Coffee },
    { id: 3, type: 'Transport', title: 'S-Class to Airport', user: 'Sarah J.', time: '42m ago', icon: Car },
];

export const RecentRequests = () => {
    return (
        <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-serif text-white">Concierge Feed</h3>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="space-y-4 flex-1">
                {requests.map((req) => (
                    <div key={req.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5 text-white/60 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <req.icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-sm text-white font-medium">{req.title}</p>
                                    <p className="text-xs text-white/40">{req.type} • {req.user}</p>
                                </div>
                            </div>
                            <span className="text-[10px] text-white/30 font-mono">{req.time}</span>
                        </div>

                        <div className="flex gap-2 pl-11">
                            <button className="flex-1 py-1.5 rounded-lg bg-white/5 hover:bg-green-500/20 text-white/40 hover:text-green-400 text-xs transition-colors flex items-center justify-center gap-2">
                                <Check className="w-3 h-3" /> Approve
                            </button>
                            <button className="flex-1 py-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-400 text-xs transition-colors flex items-center justify-center gap-2">
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
