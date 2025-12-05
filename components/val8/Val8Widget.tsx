import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Minimize2, Maximize2, User, Sparkles } from 'lucide-react';
import { useVal8, Val8Provider } from './Val8Context';
import { ChatInterface } from './ChatInterface';
import { BookingFlow } from './BookingFlow';
import { PostBookingSummary } from './PostBookingSummary';
import { ExitModal } from './ExitModal';
import { LoginModal } from './LoginModal';
import { Dashboard } from './Dashboard';

const Val8WidgetContent: React.FC = () => {
    const { isExpanded, setIsExpanded, bookingState, chatHistory, setShowExitModal, view, setView, user, setShowLoginModal } = useVal8();
    const [showLoader, setShowLoader] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
        setShowLoader(true);
        // Simulate loading delay (Frame 2)
        setTimeout(() => {
            setShowLoader(false);
        }, 2000);
    };

    const handleClose = () => {
        if (chatHistory.length > 0 && bookingState !== 'confirmed' && bookingState !== 'post-booking') {
            setShowExitModal(true);
        } else {
            setIsExpanded(false);
        }
    };

    const handleProfileClick = () => {
        if (user) {
            setView(view === 'dashboard' ? 'chat' : 'dashboard');
        } else {
            setShowLoginModal(true);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            width: view === 'dashboard' ? '90vw' : '400px',
                            height: view === 'dashboard' ? '85vh' : '700px',
                            x: view === 'dashboard' ? '-50%' : 0,
                            left: view === 'dashboard' ? '50%' : 'auto',
                            right: view === 'dashboard' ? 'auto' : '1.5rem', // 6 = 1.5rem
                            bottom: view === 'dashboard' ? '50%' : '1.5rem',
                            translateY: view === 'dashboard' ? '50%' : 0
                        }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bg-obsidian rounded-[32px] shadow-2xl overflow-hidden flex flex-col border border-white/10 relative z-50"
                        style={{
                            // Ensure it stays fixed relative to viewport
                            position: 'fixed'
                        }}
                    >
                        {/* Header */}
                        <div className="h-16 bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 shrink-0 relative z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-champagne-400 flex items-center justify-center">
                                    <span className="font-serif font-bold text-obsidian text-lg">V</span>
                                </div>
                                <div>
                                    <h1 className="text-white font-serif text-lg tracking-wide">Val8</h1>
                                    <p className="text-[10px] text-champagne-400 uppercase tracking-widest font-medium">Concierge</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleProfileClick}
                                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    {user ? (
                                        <div className="w-full h-full rounded-full bg-champagne-400 text-obsidian flex items-center justify-center font-bold text-xs">
                                            {user.name.charAt(0)}
                                        </div>
                                    ) : (
                                        <User className="w-4 h-4" />
                                    )}
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {showLoader ? (
                                    <motion.div
                                        key="loader"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full border border-champagne-400/30 flex items-center justify-center mb-6 relative">
                                            <div className="absolute inset-0 rounded-full border border-champagne-400/10 animate-ping" />
                                            <div className="w-2 h-2 bg-champagne-400 rounded-full animate-pulse" />
                                        </div>
                                        <h3 className="text-lg font-serif text-white mb-2">Preparing your experience...</h3>
                                        <p className="text-xs text-white/40 font-light tracking-wide">Connecting to global concierge network</p>
                                    </motion.div>
                                ) : view === 'dashboard' ? (
                                    <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
                                        <Dashboard />
                                    </motion.div>
                                ) : (
                                    <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
                                        <ChatInterface />
                                        <BookingFlow />
                                        <PostBookingSummary />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Modals */}
                            <ExitModal />
                            <LoginModal />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher */}
            <AnimatePresence>
                {!isExpanded && (
                    <motion.button
                        layoutId="launcher"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleExpand}
                        className="bg-obsidian text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 group z-50"
                    >
                        <div className="w-8 h-8 rounded-full bg-champagne-400 flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <span className="font-serif font-bold text-obsidian text-lg">V</span>
                        </div>
                        <span className="font-medium tracking-wide pr-2">Plan Your Trip</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Val8Widget: React.FC = () => {
    return (
        <Val8Provider>
            <Val8WidgetContent />
        </Val8Provider>
    );
};
