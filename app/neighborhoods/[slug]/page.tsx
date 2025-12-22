import { notFound } from 'next/navigation';
import { MOCK_NEIGHBORHOODS } from '@/lib/data/neighborhoods';
import { getListings } from '@/lib/repliers';
import { ListingCard } from '@/components/listings/ListingCard';
import { FadeIn, SlideUp } from '@/components/ui/motion';
import { ArrowUpRight, TrendingUp, TrendingDown, Minus, Home, CheckCircle } from 'lucide-react';

interface PageProps {
    params: { slug: string };
}

// Note: In Next.js 15+, params is async.
export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const neighborhood = MOCK_NEIGHBORHOODS.find(n => n.slug === slug);

    if (!neighborhood) {
        notFound();
    }

    // Simulate fetching listings for this specific neighborhood
    const listings = await getListings({ limit: '3' });

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero */}
            <div className="relative h-[60vh] flex items-end">
                <div className="absolute inset-0">
                    <img src={neighborhood.heroImage} alt={neighborhood.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="container mx-auto px-6 pb-12 relative z-10 text-white">
                    <FadeIn>
                        <h1 className="text-6xl font-bold tracking-tighter mb-4">{neighborhood.name}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light">
                            {neighborhood.shortDescription}
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Market Stats Grid (VOW Value Prop) */}
            <section className="py-12 bg-white dark:bg-zinc-900 border-b border-border">
                <div className="container mx-auto px-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Market Pulse (Last 30 Days)</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <SlideUp delay={0.1}>
                            <div className="text-3xl font-bold mb-1">{formatPrice(neighborhood.stats.avgPrice)}</div>
                            <div className="text-sm text-muted-foreground">Avg. Sold Price</div>
                        </SlideUp>
                        <SlideUp delay={0.2}>
                            <div className="text-3xl font-bold mb-1 flex items-center">
                                {neighborhood.stats.avgDom} Days
                                {neighborhood.stats.avgDom < 10 && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Fast</span>}
                            </div>
                            <div className="text-sm text-muted-foreground">Avg. Days on Market</div>
                        </SlideUp>
                        <SlideUp delay={0.3}>
                            <div className="text-3xl font-bold mb-1 flex items-center">
                                {neighborhood.stats.marketTrend === 'up' && <TrendingUp className="text-green-500 mr-2" />}
                                {neighborhood.stats.marketTrend === 'down' && <TrendingDown className="text-red-500 mr-2" />}
                                {neighborhood.stats.marketTrend === 'stable' && <Minus className="text-gray-500 mr-2" />}
                                {neighborhood.stats.marketTrend === 'up' ? 'Heating Up' : neighborhood.stats.marketTrend === 'down' ? 'Cooling' : 'Balanced'}
                            </div>
                            <div className="text-sm text-muted-foreground">Market Trend</div>
                        </SlideUp>
                        <SlideUp delay={0.4}>
                            <div className="text-3xl font-bold mb-1">{neighborhood.stats.activeListings}</div>
                            <div className="text-sm text-muted-foreground">Active Listings</div>
                        </SlideUp>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h3 className="text-2xl font-bold mb-4">The Vibe</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {neighborhood.fullDescription}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold mb-6">Neighborhood Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {neighborhood.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-secondary/30 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                                    <span className="font-medium">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold">Latest Listings in {neighborhood.name}</h3>
                            <a href="/search" className="text-primary font-semibold hover:underline">View All</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {listings.map(l => (
                                <ListingCard key={l.mlsNumber} listing={l} />
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar / CTA */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <div className="bg-primary text-primary-foreground p-8 rounded-3xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-4">Live in {neighborhood.name}?</h4>
                                <p className="mb-6 opacity-90">
                                    Get an instant, AI-driven valuation of your home based on recent sold data in your immediate block.
                                </p>
                                <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                                    Get Valuation
                                </button>
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                        </div>

                        <div className="p-8 border border-border rounded-3xl">
                            <h4 className="font-bold mb-2">Detailed Market Report</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Download the full PDF report for {neighborhood.name}, including school rankings and development plans.
                            </p>
                            <button className="flex items-center text-sm font-bold text-primary hover:underline">
                                Download Report <ArrowUpRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return MOCK_NEIGHBORHOODS.map((neighborhood) => ({
        slug: neighborhood.slug,
    }));
}
