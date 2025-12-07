import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, ArrowRight, MapPin, Car, Utensils, ShoppingBag, Sun, Star } from 'lucide-react';
import { useVal8 } from './Val8Context';

export const DemoCard: React.FC = () => {
    const { demoStep } = useVal8();

    // Map content to demo steps based on the video.md script logic
    // 0: Greeting/Context -> Weather
    // 1: Flight -> SFO to DXB
    // 2: Hotel -> One&Only
    // 3: Ride -> Black SUV
    // 4: Dining -> Ossiano
    // 5: Essentials -> Sunscreen
    // 6: Experiences -> Desert Safari / Summary

    return (
        <div className="h-full w-full flex flex-col p-6 overflow-hidden relative">
            {/* Dynamic Background Image based on Step */}
            <div className="absolute inset-0 z-0">
                <img
                    src={
                        demoStep === 0 ? "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop" : // Dubai Skyline
                            demoStep === 1 ? "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" : // Flight
                                demoStep === 2 ? "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" : // Luxury Hotel
                                    demoStep === 3 ? "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" : // Luxury Car
                                        demoStep === 4 ? "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" : // Dining
                                            demoStep === 5 ? "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop" : // Shopping
                                                "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop" // Desert
                    }
                    alt="Dubai Context"
                    className="w-full h-full object-cover opacity-30 blur-sm transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-end">
                <AnimatePresence mode="wait">

                    {/* STEP 0: CONTEXT & WEATHER */}
                    {demoStep === 0 && (
                        <motion.div
                            key="step0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-4"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-[#C5A572] text-[10px] uppercase tracking-[0.3em] font-medium border border-[#C5A572]/20 px-2 py-1 rounded inline-block mb-2">
                                        Destination
                                    </span>
                                    <h2 className="text-5xl font-serif text-white leading-none">Dubai</h2>
                                    <p className="text-white/60 text-lg font-light mt-1">United Arab Emirates</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-light text-white flex items-center gap-2 justify-end">
                                        <Sun className="w-8 h-8 text-[#C5A572]" />
                                        95°
                                    </div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Sunny & Clear</p>
                                </div>
                            </div>

                            <div className="glass-panel p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-white/80 text-sm font-medium">Upcoming Trip</p>
                                    <span className="text-xs text-white/40">June 2025</span>
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-1/12 bg-[#C5A572]" />
                                </div>
                                <p className="text-xs text-white/40 mt-2">Planning in progress...</p>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 1: FLIGHT */}
                    {demoStep === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-[#C5A572] text-[10px] font-bold uppercase tracking-widest mb-1">Flight Option</p>
                                    <h3 className="text-2xl text-white font-serif">Emirates</h3>
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" alt="Emirates" className="h-8 opacity-80 filter invert" />
                            </div>

                            <div className="flex items-center justify-between mb-8">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-white tracking-tight">SFO</p>
                                    <p className="text-xs text-white/40 mt-1">San Francisco</p>
                                </div>
                                <div className="flex-1 flex flex-col items-center px-4">
                                    <div className="flex items-center gap-2 text-white/40 text-xs mb-1">15h 45m • Non-stop</div>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent relative">
                                        <Plane className="w-4 h-4 text-[#C5A572] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                                    </div>
                                    <div className="text-[#C5A572] text-[10px] mt-2 uppercase tracking-wide">Business Class</div>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-white tracking-tight">DXB</p>
                                    <p className="text-xs text-white/40 mt-1">Dubai Int'l</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <div>
                                    <p className="text-white text-lg font-medium">$8,450</p>
                                    <p className="text-white/40 text-xs">Round Trip</p>
                                </div>
                                <button className="px-4 py-2 bg-[#C5A572] text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                                    Select
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: HOTEL */}
                    {demoStep === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                            <span className="text-[#C5A572] text-[10px] uppercase tracking-[0.3em] font-medium border border-[#C5A572]/20 px-2 py-1 rounded inline-block">
                                Recommended Stay
                            </span>
                            <h2 className="text-3xl font-serif text-white leading-tight">One&Only Royal Mirage</h2>
                            <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-white/40 text-xs ml-2">(4.9/5)</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" className="rounded-xl h-32 w-full object-cover" />
                                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" className="rounded-xl h-32 w-full object-cover" />
                            </div>

                            <div className="glass-panel p-4 rounded-xl border border-white/10 bg-white/5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h4 className="text-white font-medium">Arabian Court Suite</h4>
                                        <p className="text-white/40 text-xs">Sea View • 2 Adults</p>
                                    </div>
                                    <span className="text-lg text-white">$1,250<span className="text-xs text-white/40">/night</span></span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: RIDE */}
                    {demoStep === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Car className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl text-white font-serif mb-1">Chauffeur Service</h3>
                            <p className="text-[#C5A572] text-xs uppercase tracking-widest mb-6">Emirates Business Class</p>

                            <div className="w-full space-y-3">
                                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-white/60 text-xs">Pickup</span>
                                    <span className="text-white text-sm font-medium">DXB Terminal 3</span>
                                </div>
                                <div className="flex justify-center">
                                    <div className="h-4 w-[1px] bg-white/10" />
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-white/60 text-xs">Dropoff</span>
                                    <span className="text-white text-sm font-medium">One&Only Royal Mirage</span>
                                </div>
                            </div>
                            <p className="text-white/40 text-[10px] mt-6">Complimentary with your flight</p>
                        </motion.div>
                    )}

                    {/* STEP 4: DINING */}
                    {demoStep === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" className="w-full h-48 object-cover rounded-2xl mb-4 opacity-80" />
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h2 className="text-3xl font-serif text-white">Ossiano</h2>
                                    <p className="text-[#C5A572] text-xs uppercase tracking-widest">Underwater Fine Dining</p>
                                </div>
                                <div className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                                    <span className="text-white text-xs font-medium">Michelin Star</span>
                                </div>
                            </div>
                            <p className="text-white/60 text-sm font-light mb-4">
                                A progressive fine dining experience inspired by the ocean, located at Atlantis, The Palm.
                            </p>
                            <div className="glass-panel p-3 rounded-xl border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Utensils className="w-4 h-4 text-white/60" />
                                    <div>
                                        <p className="text-white text-sm">Reservation Request</p>
                                        <p className="text-white/40 text-[10px]">Friday, June 6 • 8:00 PM</p>
                                    </div>
                                </div>
                                <span className="text-[#C5A572] text-xs font-bold">CONFIRM</span>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 5: ESSENTIALS */}
                    {demoStep === 5 && (
                        <motion.div key="step5" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full justify-center">
                            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="px-2 py-1 rounded bg-[#C5A572]/20 text-[#C5A572] text-[10px] font-bold uppercase tracking-widest border border-[#C5A572]/20">
                                        Essential
                                    </div>
                                </div>
                                <ShoppingBag className="w-10 h-10 text-white mb-4" />
                                <h3 className="text-2xl font-serif text-white mb-1">SunSport SPF 50</h3>
                                <div className="flex gap-1 mb-4">
                                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                </div>
                                <p className="text-white/60 text-sm mb-6">High performance sun protection, perfect for Dubai's intense sun. Delivered to your suite.</p>
                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <span className="text-xl text-white font-medium">$18.50</span>
                                    <button className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#C5A572] transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 6+: EXPERIENCES / SUMMARY */}
                    {demoStep >= 6 && (
                        <motion.div key="step6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                            <span className="text-[#C5A572] text-[10px] uppercase tracking-[0.3em] font-medium border border-[#C5A572]/20 px-2 py-1 rounded inline-block">
                                Signature Experience
                            </span>
                            <h2 className="text-3xl font-serif text-white leading-tight">Private Desert Safari</h2>

                            <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop" className="w-full h-40 object-cover rounded-xl opacity-90" />

                            <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A572] mt-1.5" />
                                    <p className="text-white/80 text-sm font-light">Vintage Land Rover collection from your hotel.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A572] mt-1.5" />
                                    <p className="text-white/80 text-sm font-light">Sunset falconry display and traditional dinner.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A572] mt-1.5" />
                                    <p className="text-white/80 text-sm font-light">Stargazing with private astronomer.</p>
                                </div>
                            </div>

                            <button className="w-full py-3 mt-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl text-xs uppercase tracking-widest transition-colors">
                                View Full Itinerary
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
};
