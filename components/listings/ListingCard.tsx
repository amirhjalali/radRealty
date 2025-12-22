'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Car, ArrowRight, MapPin } from 'lucide-react';
import { Listing } from '@/types';
import { cn } from '@/lib/utils';

interface ListingCardProps {
    listing: Listing;
    className?: string;
}

export function ListingCard({ listing, className }: ListingCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <Link
            href={`/listings/${listing.mlsNumber}`}
            className={cn("group block bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50", className)}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={listing.images[0]}
                    alt={listing.address.streetName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                    {listing.status}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-bold text-lg">{formatPrice(listing.price)}</p>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors">
                            {listing.address.streetNumber} {listing.address.streetName}
                        </h3>
                        <div className="flex items-center text-muted-foreground text-sm mt-1">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            {listing.address.neighborhood}, {listing.address.city}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border mt-4">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Bed className="w-5 h-5 mb-1 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">{listing.details.bedrooms} Beds</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center border-l border-border">
                        <Bath className="w-5 h-5 mb-1 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">{listing.details.bathrooms} Baths</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center border-l border-border">
                        <Car className="w-5 h-5 mb-1 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">{listing.details.parkingSpaces} Parking</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
