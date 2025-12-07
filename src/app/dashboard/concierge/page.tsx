"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Sparkles, Paperclip, ArrowUpRight, Plane, Calendar, X, Utensils, CloudRain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types & Mock Data ---

type MessageType = 'text' | 'flight-card' | 'weather-card' | 'action-card';

interface Message {
    id: string;
    sender: 'AI' | 'User';
    type: MessageType;
    content: any; // Flexible content payload
    timestamp: string;
}

const MOCK_HISTORY: Message[] = [
    {
        id: '1',
        sender: 'AI',
        type: 'text',
        content: 'Good morning, Al Mamun. I noticed you have some free time before your flight on Friday. Would you like me to curate a customized itinerary for the afternoon?',
        timestamp: '09:00 AM'
    }
];

const QUICK_ACTIONS = [
    { icon: <Plane className="w-3 h-3" />, label: 'Check Flight Status' },
    { icon: <Utensils className="w-3 h-3" />, label: 'Book Dinner' },
    { icon: <CloudRain className="w-3 h-3" />, label: 'Weather Forecast' },
];

// --- Components ---

const AICore = ({ state }: { state: 'idle' | 'listening' | 'processing' }) => {
    return (
        <div className="relative w-24 h-24 flex items-center justify-center pointer-events-none select-none transition-all duration-700">
            {/* Core Glow */}
            <div className={`absolute inset-0 bg-primary/20 blur-3xl rounded-full transition-all duration-1000 ${state === 'processing' ? 'scale-150 opacity-50' : 'scale-100 opacity-20'}`} />

            {/* Outer Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/10 border-t-primary/30"
            />

            {/* Inner Pulse */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            />
        </div>
    );
};

const FlightCard = ({ data }: { data: any }) => (
    <div className="glass-panel p-6 rounded-2xl border border-white/10 w-full max-w-md mt-4 hover:border-primary/30 transition-colors group cursor-pointer shadow-2xl shadow-black/20">
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                    <Plane className="w-5 h-5 text-white/60" />
                </div>
                <div>
                    <h4 className="text-white font-serif">{data.flightNumber}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{data.airline}</p>
                </div>
            </div>
            <span className="text-emerald-400 text-[10px] uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 rounded-full">On Time</span>
        </div>
        <div className="flex justify-between items-center relative">
            <div className="text-center">
                <div className="text-2xl font-mono text-white">{data.origin}</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest mt-1">{data.originTime}</div>
            </div>

            <div className="flex-1 px-4 flex flex-col items-center">
                <div className="text-white/20 text-[10px] uppercase tracking-widest mb-1">{data.duration}</div>
                <div className="w-full h-[1px] bg-white/10 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
            </div>

            <div className="text-center">
                <div className="text-2xl font-mono text-white">{data.destination}</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest mt-1">{data.destTime}</div>
            </div>
        </div>
    </div>
);

// --- Main Page ---

export default function ConciergePage() {
    const [messages, setMessages] = useState<Message[]>(MOCK_HISTORY);
    const [input, setInput] = useState('');
    const [aiState, setAiState] = useState<'idle' | 'listening' | 'processing'>('idle');
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = (text: string = input) => {
        if (!text.trim()) return;

        const newMsg: Message = {
            id: Date.now().toString(),
            sender: 'User',
            type: 'text',
            content: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMsg]);
        setInput('');
        setAiState('processing');

        // Simulate intelligent response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'AI',
                type: 'text',
                content: "I've found a few exclusive options for your afternoon in Miami. There's a private viewing at the Design District or a table available at Mandolin Aegean Bistro.",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            // Optional: simulate formatting a card
            const flightCard: Message = {
                id: (Date.now() + 2).toString(),
                sender: 'AI',
                type: 'flight-card',
                content: {
                    flightNumber: 'AA 294',
                    airline: 'American Airlines',
                    origin: 'JFK',
                    destination: 'MIA',
                    originTime: '10:00 AM',
                    destTime: '01:15 PM',
                    duration: '3h 15m'
                },
                timestamp: ''
            };

            setMessages(prev => [...prev, aiResponse]);
            // Occasionally add a card for demo purposes
            if (Math.random() > 0.5) {
                setTimeout(() => setMessages(prev => [...prev, flightCard]), 800);
            }

            setAiState('idle');
        }, 2000);
    };

    return (
        <div className="h-full flex flex-col relative overflow-hidden">

            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
            </div>

            {/* Header / Status - More Compact */}
            <div className="flex-none flex justify-center py-4 relative z-10 opacity-80 hover:opacity-100 transition-opacity">
                <AICore state={aiState} />
            </div>

            {/* Chat Stream (Centered, Editorial Style) */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-6 pb-40 space-y-10 scrollbar-hide max-w-4xl mx-auto w-full relative z-10"
            >
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`flex flex-col ${msg.sender === 'User' ? 'items-end' : 'items-start'}`}
                    >
                        {/* Sender Label - Minimal */}
                        <span className={`text-[10px] uppercase tracking-[0.2em] mb-3 text-white/20 ${msg.sender === 'User' ? 'text-right' : 'text-left'}`}>
                            {msg.sender === 'AI' ? 'Lumina' : 'You'}
                        </span>

                        {/* Content */}
                        {msg.type === 'text' && (
                            <div className={`max-w-2xl ${msg.sender === 'AI' ? '' : 'flex justify-end'}`}>
                                <p className={`
                                    text-xl md:text-2xl font-light leading-relaxed
                                    ${msg.sender === 'User' ? 'text-white/60 text-right font-serif italic' : 'text-white/90 font-serif'}
                                `}>
                                    {msg.content}
                                </p>
                            </div>
                        )}

                        {msg.type === 'flight-card' && (
                            <FlightCard data={msg.content} />
                        )}

                    </motion.div>
                ))}

                {aiState === 'processing' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 mt-4"
                    >
                        <span className="w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </motion.div>
                )}
            </div>

            {/* Floating Command Center */}
            <div className="absolute bottom-0 pb-6 left-0 w-full z-20 px-4 bg-gradient-to-t from-bg via-bg/80 to-transparent">
                <div className="max-w-2xl mx-auto flex flex-col gap-4">

                    {/* Quick Actions (Chips) */}
                    <div className="flex justify-center gap-2 flex-wrap">
                        {QUICK_ACTIONS.map((action, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(action.label)}
                                className="px-4 py-2 rounded-full border border-white/5 bg-black/40 hover:bg-white/10 backdrop-blur-md flex items-center gap-2 text-[10px] uppercase tracking-wider text-white/40 hover:text-white transition-all transform hover:-translate-y-0.5"
                            >
                                {action.icon}
                                {action.label}
                            </button>
                        ))}
                    </div>

                    {/* Input Bar */}
                    <div className="relative group w-full">
                        {/* Glow Effect on Focus/Hover */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg" />

                        <div className="relative glass-panel rounded-full border border-white/10 flex items-center p-2 pr-2 shadow-2xl bg-[#0a0a0a]/90 backdrop-blur-xl transition-colors focus-within:border-white/20">

                            <div className="pl-6 flex-1">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Command Val8..."
                                    className="w-full bg-transparent border-none text-white placeholder:text-white/20 focus:outline-none text-lg font-light h-12"
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/30 hover:text-white transition-colors">
                                    <Mic className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleSend()}
                                    className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!input.trim()}
                                >
                                    <ArrowUpRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.3em]">
                        Private Concierge • Encrypted
                    </p>
                </div>
            </div>

        </div>
    );
}
