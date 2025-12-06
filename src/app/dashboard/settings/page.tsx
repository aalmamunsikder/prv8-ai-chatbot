"use client";

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { User, Bell, Shield, Smartphone } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function SettingsPage() {
    const { user } = useAuth();

    return (
        <div className="space-y-8">
            <SectionHeading title="Settings" subtitle="Preferences" />

            <div className="max-w-3xl glass-card rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-8 border-b border-white/5 flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary font-serif italic text-3xl">
                        {user?.name?.[0] || 'M'}
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-white">{user?.name}</h3>
                        <p className="text-white/40 text-sm mt-1">{user?.email}</p>
                    </div>
                    <button className="ml-auto px-4 py-2 border border-white/10 rounded-full text-xs text-white/60 hover:text-white hover:bg-white/5 transition-colors">
                        Edit Profile
                    </button>
                </div>

                <div className="p-2">
                    {[
                        { icon: User, label: 'Account Information', desc: 'Update details and preferences' },
                        { icon: Bell, label: 'Notifications', desc: 'Manage alerts and messages' },
                        { icon: Shield, label: 'Privacy & Security', desc: '2FA and data settings' },
                        { icon: Smartphone, label: 'Connected Devices', desc: 'Manage app sessions' },
                    ].map((item, i) => (
                        <button key={i} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors group text-left">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white text-sm font-medium">{item.label}</h4>
                                <p className="text-white/30 text-xs">{item.desc}</p>
                            </div>
                            <div className="ml-auto text-white/20 group-hover:translate-x-1 transition-transform">→</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
