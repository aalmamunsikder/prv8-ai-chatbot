import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, LogOut, MessageSquare, Clock, ChevronRight } from 'lucide-react';
import { useVal8 } from './Val8Context';

export const Dashboard: React.FC = () => {
    const { user, trips, setView, logout } = useVal8();

    if (!user) return null;

    return (
        <div className="h-full flex flex-col bg-obsidian">
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-serif text-white">Dashboard</h2>
                    <button
                        onClick={logout}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-champagne-400 flex items-center justify-center text-obsidian font-bold text-lg">
                        {user.name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-white/40 text-xs">{user.email}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
                {/* Upcoming Trips */}
                <section>
                    <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">Upcoming Trips</h3>
                    {trips.filter(t => t.status === 'upcoming').length > 0 ? (
                        <div className="space-y-4">
                            {trips.filter(t => t.status === 'upcoming').map(trip => (
                                <div key={trip.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-champagne-400/50 transition-colors">
                                    <div className="h-32 relative">
                                        <img src={trip.hotel.image} alt={trip.hotel.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                                        <div className="absolute bottom-3 left-3">
                                            <h4 className="text-white font-serif text-lg">{trip.hotel.name}</h4>
                                            <div className="flex items-center gap-1 text-white/60 text-xs">
                                                <MapPin className="w-3 h-3" />
                                                <span>{trip.hotel.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-white/60 text-xs">
                                            <Calendar className="w-3 h-3" />
                                            <span>{trip.dates}</span>
                                        </div>
                                        <button className="text-champagne-400 text-xs font-medium hover:text-white transition-colors">
                                            View Itinerary
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 bg-white/5 rounded-xl border border-white/5 border-dashed">
                            <p className="text-white/40 text-sm mb-4">No upcoming trips.</p>
                            <button
                                onClick={() => setView('chat')}
                                className="px-4 py-2 bg-champagne-400 text-obsidian rounded-lg text-xs font-medium hover:bg-champagne-300 transition-colors"
                            >
                                Plan a Trip
                            </button>
                        </div>
                    )}
                </section>

                {/* Past Trips */}
                <section>
                    <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">Past Trips</h3>
                    <div className="space-y-3">
                        {[1, 2].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-white/40" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">Paris Getaway</p>
                                        <p className="text-white/40 text-xs">Oct 2023</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-white/20" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer Action */}
            <div className="p-4 border-t border-white/5 bg-black/20">
                <button
                    onClick={() => setView('chat')}
                    className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                    <MessageSquare className="w-4 h-4" />
                    Return to Concierge
                </button>
            </div>
        </div>
    );
};
