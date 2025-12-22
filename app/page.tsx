import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { getListings } from '@/lib/repliers';
import { ListingCard } from '@/components/listings/ListingCard';

export default async function Home() {
  const listings = await getListings({ limit: '3' });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background - In a real app, this would be a high-quality video or image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0">
          {/* Placeholder for video/image */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="container relative z-20 px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            Real Estate <br />
            <span className="text-primary-foreground bg-primary px-4 rounded-lg">Redefined</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Data-driven insights meets boutique service. Discover your next home with Rad Realty.
          </p>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 flex items-center shadow-2xl pl-6">
            <Search className="w-6 h-6 text-gray-300 mr-4" />
            <input
              type="text"
              placeholder="Search by city, neighborhood, or address..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-300 py-3 text-lg"
            />
            <Link
              href="/search"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Curated listings just for you.</p>
            </div>
            <Link href="/search" className="hidden md:flex items-center text-primary font-semibold hover:underline">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <ListingCard key={listing.mlsNumber} listing={listing} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/search" className="inline-flex items-center bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold">
              View All Properties <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Prop (Stak Media style narrative) */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Not just a brokerage, <br /> a technology partner.</h2>
              <p className="text-lg text-muted-foreground">
                We believe that real estate data should be transparent. That's why we give you the same tools the pros use—sold prices, market velocity, and AI-driven insights—wrapped in a human experience.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/sell" className="px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Sell with Rad
                </Link>
                <Link href="/about" className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl relative overflow-hidden">
              {/* Placeholder for high-quality lifestyle image/video */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                [Lifestyle Image / Video]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
