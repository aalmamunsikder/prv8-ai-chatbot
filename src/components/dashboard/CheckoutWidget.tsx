import React from 'react';
import { CreditCard, ShieldCheck, Plane, Hotel, Car, Utensils, ShoppingBag, Map } from 'lucide-react';

export const CheckoutWidget: React.FC<{ onCheckout?: () => void }> = ({ onCheckout }) => {
    return (
        <div className="h-full p-4 flex flex-col relative overflow-hidden text-white">
            {/* Header */}
            <div className="flex justify-between items-start mb-2 border-b border-white/10 pb-2">
                <div>
                    <h3 className="text-lg font-serif mb-0.5 text-white">Trip Manifest</h3>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60">
                        <span>Jun 05 - Jun 09</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>2 Travelers</span>
                    </div>
                </div>
                <div className="bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/20">
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Reserving</span>
                </div>
            </div>

            {/* Line Items */}
            <div className="flex-1 space-y-2 pr-2">
                {/* Flight */}
                <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                        <div className="mt-1 p-1.5 bg-white/5 rounded-lg border border-white/5">
                            <Plane className="w-3 h-3 text-white/60" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Emirates Business Class</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Round Trip • SFO - DXB</p>
                        </div>
                    </div>
                    <span className="text-sm font-light text-white/80">$6,200</span>
                </div>

                {/* Hotel */}
                <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                        <div className="mt-1 p-1.5 bg-white/5 rounded-lg border border-white/5">
                            <Hotel className="w-3 h-3 text-white/60" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">One&Only Royal Mirage</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">4 Nights • Arabian Court Suite</p>
                        </div>
                    </div>
                    <span className="text-sm font-light text-white/80">$5,800</span>
                </div>

                {/* Dining */}
                <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                        <div className="mt-1 p-1.5 bg-white/5 rounded-lg border border-white/5">
                            <Utensils className="w-3 h-3 text-white/60" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Ossiano Experience</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Underwater Dining • Friday</p>
                        </div>
                    </div>
                    <span className="text-sm font-light text-white/80">$450</span>
                </div>

                {/* Included */}
                <div className="flex justify-between items-start opacity-60">
                    <div className="flex gap-3">
                        <div className="mt-1 p-1.5 bg-white/5 rounded-lg border border-white/5">
                            <Car className="w-3 h-3 text-white/60" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Chauffeur Service</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Complimentary</p>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mt-1">Included</span>
                </div>
            </div>

            {/* Total & Action */}
            <div className="mt-2 pt-2 border-t border-white/10">
                <div className="flex justify-between items-end mb-2">
                    <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Total Due</span>
                        <span className="text-xl font-serif text-white">$12,450</span>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-0.5">Taxes Included</span>
                    </div>
                </div>

                <button
                    onClick={onCheckout}
                    className="w-full group relative overflow-hidden rounded-xl bg-white text-black font-bold py-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <div className="flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="tracking-wide">Confirm Reservation</span>
                    </div>
                </button>
            </div>
        </div>
    );
};
