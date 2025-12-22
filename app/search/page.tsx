import { getListings } from '@/lib/repliers';
import { ListingCard } from '@/components/listings/ListingCard';
import { MapPin, List, Map as MapIcon, Filter } from 'lucide-react';
import Link from 'next/link';

export default async function SearchPage() {
    const listings = await getListings({ limit: '10' });

    return (
        <div className="flex flex-col h-[calc(100vh-80px)]">
            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center space-x-2 text-sm">
                    <span className="font-semibold">{listings.length} Results</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">Toronto, ON</span>
                </div>

                <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                        <Filter className="w-4 h-4" />
                        <span>Filters</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm font-medium">
                        <span>Save Search</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Map Section (Hidden on mobile initially in real app, but 50/50 for desktop) */}
                <div className="hidden lg:block w-1/2 bg-gray-100 relative border-r border-gray-200">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col">
                        <MapPin className="w-12 h-12 mb-2 opacity-20" />
                        <p>Interactive Map Loading...</p>
                        <p className="text-xs text-muted-foreground mt-2">(Mapbox integration pending API Key)</p>
                    </div>
                </div>

                {/* List Section */}
                <div className="w-full lg:w-1/2 overflow-y-auto p-6 scroll-smooth">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {listings.map((listing) => (
                            <ListingCard key={listing.mlsNumber} listing={listing} />
                        ))}
                        {/* Duplicate for visual fill since mock data is small */}
                        {listings.map((listing) => (
                            <ListingCard key={`${listing.mlsNumber}-dup`} listing={listing} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
