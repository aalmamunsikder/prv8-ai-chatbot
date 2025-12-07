"use client";

import React from 'react';
import { MoreHorizontal, Shield, Crown } from 'lucide-react';

const users = [
    { id: 'USR-8901', name: 'Alexander V.', email: 'alex.v@example.com', tier: 'Noir', status: 'Active', spend: '$124,500' },
    { id: 'USR-8902', name: 'Sarah J.', email: 'sarah.j@example.com', tier: 'Gold', status: 'Active', spend: '$42,300' },
    { id: 'USR-8903', name: 'Michael R.', email: 'm.ross@example.com', tier: 'Platinum', status: 'Review', spend: '$88,100' },
    { id: 'USR-8904', name: 'Emma W.', email: 'emma.w@example.com', tier: 'Noir', status: 'Active', spend: '$210,000' },
    { id: 'USR-8905', name: 'David L.', email: 'david.l@example.com', tier: 'Gold', status: 'Inactive', spend: '$12,400' },
];

export const UserTable = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="p-6 border-b border-white/[0.05] flex justify-between items-center">
                <h3 className="text-lg font-serif text-white">Member Directory</h3>
                <button className="text-xs text-primary hover:text-white transition-colors uppercase tracking-widest">View All</button>
            </div>

            <div className="flex-1 overflow-auto">
                <table className="w-full text-left">
                    <thead className="text-[10px] uppercase tracking-widest text-white/40 font-medium bg-white/[0.02]">
                        <tr>
                            <th className="px-6 py-4">Identity</th>
                            <th className="px-6 py-4">Tier Status</th>
                            <th className="px-6 py-4">Total Spend</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.05]">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-serif text-white/60">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm text-white font-medium">{user.name}</p>
                                            <p className="text-xs text-white/40">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        {user.tier === 'Noir' ? (
                                            <Shield className="w-3 h-3 text-white" />
                                        ) : user.tier === 'Gold' ? (
                                            <Crown className="w-3 h-3 text-yellow-500" />
                                        ) : (
                                            <div className="w-3 h-3 rounded-full bg-white/20" />
                                        )}
                                        <span className={`text-xs ${user.tier === 'Noir' ? 'text-white' : 'text-white/60'}`}>{user.tier}</span>

                                        {user.status === 'Review' && (
                                            <span className="ml-2 text-[10px] bg-red-500/20 text-red-500 px-1.5 py-0.5 rounded border border-red-500/20">Review</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-white/80 font-mono">{user.spend}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
