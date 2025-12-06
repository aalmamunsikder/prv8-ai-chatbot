"use client";

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CreditCard, History } from 'lucide-react';

export default function WalletPage() {
    return (
        <div className="space-y-8">
            <SectionHeading title="Wallet" subtitle="Membership & Payments" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card */}
                <div className="glass-heavy aspect-[1.586] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border border-white/10 group hover:border-primary/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    <div className="absolute -right-20 -top-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />

                    <div className="flex justify-between items-start z-10">
                        <span className="font-serif text-2xl text-white">LUMINA</span>
                        <span className="text-xs uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full">Noir</span>
                    </div>

                    <div className="z-10">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-8 rounded bg-gradient-to-r from-yellow-200 to-yellow-400 opacity-80" />
                        </div>
                        <p className="font-mono text-xl text-white/80 tracking-widest">•••• •••• •••• 8842</p>
                    </div>

                    <div className="flex justify-between items-end z-10">
                        <div>
                            <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Card Holder</p>
                            <p className="text-sm font-medium text-white">AL MAMUN SIKDER</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Expires</p>
                            <p className="text-sm font-medium text-white">12/28</p>
                        </div>
                    </div>
                </div>

                {/* Transaction History Placeholder */}
                <div className="glass-card rounded-3xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-6 text-white/60">
                        <History className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest">Recent Transactions</span>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <CreditCard className="w-3 h-3 text-white/40" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white">Booking Ref #839{i}</p>
                                        <p className="text-[10px] text-white/30">May {10 + i}, 2025</p>
                                    </div>
                                </div>
                                <span className="text-sm text-white font-mono">-$2,400.00</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
