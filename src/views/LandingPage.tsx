import React from 'react';
import { Header } from '@/components/ui/Header';
import { Val8Widget } from '@/components/val8/Val8Widget';
import { HeroVisual } from '@/components/home/HeroVisual';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { MembershipSection } from '@/components/home/MembershipSection';
import { CuratedSection } from '@/components/home/CuratedSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-bg text-text-primary font-sans selection:bg-primary/30">

            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] right-0 w-[70vw] h-[70vw] bg-primary/[0.04] rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] bg-white/[0.01] rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            </div>

            <Header />

            <main className="relative z-10">

                {/* Hero Section */}
                <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-8 relative z-20">
                            <ScrollReveal>
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="h-[1px] w-12 bg-primary"></span>
                                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                                        The Art of Living
                                    </span>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={200}>
                                <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white tracking-tight mb-8">
                                    Curated <br />
                                    <span className="italic ml-4 md:ml-12 font-light bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary-soft drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
                                        Existence.
                                    </span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={400}>
                                <p className="text-lg text-white/60 max-w-xl font-light leading-relaxed mb-10 pl-6 border-l border-primary/30 md:pl-0 md:border-none">
                                    Lumina orchestrates the impossible. A symbiotic blend of neural-network precision and human concierge mastery.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={600}>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Button
                                        variant="primary"
                                        href="/register"
                                        className="bg-primary text-surface hover:bg-primary-soft border-none shadow-[0_0_40px_-10px_rgba(212,175,55,0.6)]"
                                    >
                                        Begin Application
                                    </Button>
                                    <Button
                                        variant="outline"
                                        href="#experiences"
                                        className="rounded-full px-8 border-white/20 text-white hover:border-white transition-colors hover:bg-white/5"
                                    >
                                        Explore Collection
                                    </Button>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Abstract Hero Visual */}
                        <div className="lg:col-span-4 relative h-[600px] flex items-center justify-center lg:justify-end">
                            <ScrollReveal delay={800} className="w-full relative">
                                <HeroVisual />
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Brand Strip */}
                <div className="border-y border-white/[0.03] py-12 glass">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
                            {['VOGUE', 'Kinfolk', 'Monocle', 'Bloomberg', 'Architectural Digest'].map((brand, i) => (
                                <span key={i} className="font-serif text-2xl text-white/20 cursor-default hover:text-primary transition-colors duration-500">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <FeaturesSection />
                <CuratedSection />
                <MembershipSection />
                <TestimonialsSection />
                <FAQSection />

            </main>
            <Footer />
            <Val8Widget />
        </div>
    );
};
