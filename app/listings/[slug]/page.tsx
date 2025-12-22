import { getListingByMls } from '@/lib/repliers';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Bed, Bath, Car, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
    params: { slug: string };
}
// Note: In Next.js 15+, params is async.
export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const listing = await getListingByMls(slug);

    if (!listing) {
        notFound();
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Navigation Breadcrumb */}
            <div className="container mx-auto px-6 py-4">
                <Link href="/search" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
                </Link>
            </div>

            {/* Image Gallery (Main Image for Phase 1) */}
            <div className="container mx-auto px-6 mb-8">
                <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={listing.images[0]}
                        alt={listing.address.streetName}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-sm">
                        {listing.status}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Details */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="border-b border-border pb-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight mb-2">
                                    {listing.address.streetNumber} {listing.address.streetName}
                                </h1>
                                <div className="flex items-center text-lg text-muted-foreground">
                                    <MapPin className="w-5 h-5 mr-1" />
                                    {listing.address.neighborhood}, {listing.address.city}, {listing.address.province} {listing.address.postalCode}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold text-primary">{formatPrice(listing.price)}</div>
                                {listing.originalPrice && listing.originalPrice > listing.price && (
                                    <div className="text-sm text-muted-foreground line-through mt-1">
                                        Was {formatPrice(listing.originalPrice)}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex space-x-8 mt-6 p-6 bg-secondary/30 rounded-xl">
                            <div className="flex items-center">
                                <Bed className="w-6 h-6 mr-3 text-primary" />
                                <div>
                                    <div className="font-bold text-xl">{listing.details.bedrooms}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Bedrooms</div>
                                </div>
                            </div>
                            <div className="w-px bg-border h-10 self-center"></div>
                            <div className="flex items-center">
                                <Bath className="w-6 h-6 mr-3 text-primary" />
                                <div>
                                    <div className="font-bold text-xl">{listing.details.bathrooms}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Bathrooms</div>
                                </div>
                            </div>
                            <div className="w-px bg-border h-10 self-center"></div>
                            <div className="flex items-center">
                                <Car className="w-6 h-6 mr-3 text-primary" />
                                <div>
                                    <div className="font-bold text-xl">{listing.details.parkingSpaces}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Parking</div>
                                </div>
                            </div>
                            <div className="w-px bg-border h-10 self-center"></div>
                            <div className="flex items-center">
                                <Calendar className="w-6 h-6 mr-3 text-primary" />
                                <div>
                                    <div className="font-bold text-xl">{listing.daysOnMarket}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Days on Market</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">About this home</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {listing.details.description}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                            <div className="border-b border-border py-2 flex justify-between">
                                <dt className="text-muted-foreground">MLS Number</dt>
                                <dd className="font-medium">{listing.mlsNumber}</dd>
                            </div>
                            <div className="border-b border-border py-2 flex justify-between">
                                <dt className="text-muted-foreground">Style</dt>
                                <dd className="font-medium">{listing.details.style}</dd>
                            </div>
                            <div className="border-b border-border py-2 flex justify-between">
                                <dt className="text-muted-foreground">Square Footage</dt>
                                <dd className="font-medium">{listing.details.sqft || 'N/A'}</dd>
                            </div>
                            <div className="border-b border-border py-2 flex justify-between">
                                <dt className="text-muted-foreground">Year Built</dt>
                                <dd className="font-medium">{listing.details.yearBuilt || 'Unknown'}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-1">
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg sticky top-24">
                        <h3 className="text-xl font-bold mb-2">Interested in this property?</h3>
                        <p className="text-muted-foreground text-sm mb-6">
                            Schedule a private viewing with a Rad Realty agent.
                        </p>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary outline-none" placeholder="(555) 555-5555" />
                            </div>
                            <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors mt-2">
                                Request Viewing
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-border text-center">
                            <p className="text-xs text-muted-foreground">
                                Or call us directly at <strong>(555) 123-4567</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
