"use client";

import React, { useState } from 'react';
import {
    Search,
    Filter,
    MoreHorizontal,
    Shield,
    Crown,
    Mail,
    Phone,
    Calendar,
    CheckCircle,
    XCircle,
    AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data Generator
const generateUsers = (count: number) => {
    const tiers = ['Noir', 'Gold', 'Platinum'];
    const statuses = ['Active', 'Inactive', 'Review'];
    return Array.from({ length: count }).map((_, i) => ({
        id: `USR-${8900 + i}`,
        name: ['Alexander V.', 'Sarah J.', 'Michael R.', 'Emma W.', 'David L.', 'James B.', 'Olivia S.'][i % 7],
        email: `user${i}@lumina.so`,
        tier: tiers[i % 3],
        status: statuses[i % 3],
        spent: `$${(Math.random() * 200000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
        joined: 'Oct 24, 2024',
        lastActive: '2 hours ago'
    }));
};

const initialUsers = generateUsers(12);

export default function UsersPage() {
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTier, setFilterTier] = useState<string | null>(null);

    const filteredUsers = users.filter(user =>
        (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!filterTier || user.tier === filterTier)
    );

    const toggleStatus = (id: string) => {
        setUsers(users.map(u =>
            u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u
        ));
    };

    return (
        <div className="h-full flex flex-col gap-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-light text-white">Member Directory</h2>
                    <p className="text-white/40 text-sm mt-1">Manage concierge memberships and access levels.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Bulk Email
                    </button>
                    <button className="px-4 py-2 bg-primary text-black rounded-xl text-sm font-medium hover:bg-white text-black transition-colors flex items-center gap-2">
                        <Crown className="w-4 h-4" /> Invite Member
                    </button>
                </div>
            </header>

            {/* Filters */}
            <div className="glass-panel p-4 rounded-2xl border border-white/[0.05] flex flex-wrap gap-4 items-center">
                <div className="relative flex-1 min-w-[240px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                        type="text"
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder-white/20"
                    />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                    {['All', 'Noir', 'Gold', 'Platinum'].map((tier) => (
                        <button
                            key={tier}
                            onClick={() => setFilterTier(tier === 'All' ? null : tier)}
                            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${(tier === 'All' && !filterTier) || filterTier === tier
                                ? 'bg-white text-black'
                                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {tier}
                        </button>
                    ))}
                    <button className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="flex-1 glass-panel rounded-3xl border border-white/[0.05] overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-[10px] uppercase tracking-widest text-white/40 font-medium bg-white/[0.02] border-b border-white/[0.05]">
                            <tr>
                                <th className="px-6 py-4">Identity</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Tier & Spend</th>
                                <th className="px-6 py-4">Joined</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.05]">
                            <AnimatePresence>
                                {filteredUsers.map((user) => (
                                    <motion.tr
                                        key={user.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="hover:bg-white/[0.02] transition-colors group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-sm font-serif text-white/80">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm text-white font-medium">{user.name}</p>
                                                    <p className="text-xs text-white/40 font-mono">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => toggleStatus(user.id)}
                                                className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-xs border transition-all ${user.status === 'Active'
                                                    ? 'bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20'
                                                    : user.status === 'Review'
                                                        ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20'
                                                        : 'bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20'
                                                    }`}
                                            >
                                                {user.status === 'Active' ? <CheckCircle className="w-3 h-3" /> :
                                                    user.status === 'Review' ? <AlertCircle className="w-3 h-3" /> :
                                                        <XCircle className="w-3 h-3" />}
                                                {user.status}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    {user.tier === 'Noir' ? <Shield className="w-3 h-3 text-white" /> :
                                                        user.tier === 'Gold' ? <Crown className="w-3 h-3 text-yellow-500" /> :
                                                            <div className="w-3 h-3 rounded-full bg-white/20" />}
                                                    <span className={`text-xs ${user.tier === 'Noir' ? 'text-white' : 'text-white/60'}`}>{user.tier}</span>
                                                </div>
                                                <span className="text-xs text-white/40 font-mono">LTV: {user.spent}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm text-white/80">{user.joined}</span>
                                                <span className="text-[10px] text-white/30 uppercase tracking-wide">Last: {user.lastActive}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors">
                                                    <Phone className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
