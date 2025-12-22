import { SlideUp, FadeIn } from '@/components/ui/motion';
import { TeamGrid } from '@/components/features/TeamGrid';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero */}
            <section className="py-20 md:py-32 container mx-auto px-6 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                        Not your average <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Real Estate Team</span>.
                    </h1>
                </FadeIn>
                <SlideUp delay={0.2}>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We blend hyper-local expertise with Silicon Valley-grade data infrastructure.
                        We don't just "show homes"—we analyze markets, predict trends, and execute strategies.
                    </p>
                </SlideUp>
            </section>

            {/* Team Grid */}
            <TeamGrid />

            {/* Mission / Value Prop */}
            <section className="py-24 bg-zinc-900 text-white">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold">The VOW Difference</h3>
                        <p className="text-lg text-gray-300">
                            Most brokerages hide data. We democratize it. Our Virtual Office Website (VOW) gives you access to the same sold prices, days-on-market stats, and delisted history that agents see.
                        </p>
                        <div className="pl-6 border-l-4 border-primary space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="font-semibold">Transparent Pricing Data</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="font-semibold">AI-Powered Valuations</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="font-semibold">0-Pressure Strategy Sessions</span>
                            </div>
                        </div>
                        <Link href="/search" className="inline-flex items-center text-primary font-bold hover:underline mt-4">
                            Experience the Platform <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                    {/* Text Block for "Story" */}
                    <div className="p-8 md:p-12 bg-zinc-800 rounded-3xl border border-zinc-700">
                        <h4 className="text-2xl font-bold mb-6">Our Promise</h4>
                        <p className="mb-6 text-gray-400 leading-relaxed">
                            "At Rad Realty, we believe the role of an agent has changed. You don't need a gatekeeper; you need a guide. Someone to interpret the noise, negotiate the hard angles, and manage the emotional turbulence of a transaction."
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                            <div>
                                <div className="font-bold">Raden G.</div>
                                <div className="text-sm text-gray-400">Founder</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
