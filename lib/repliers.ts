import { Listing } from '@/types';

const REPLIERS_API_KEY = process.env.REPLIERS_API_KEY;
const REPLIERS_URL = 'https://api.repliers.io/listings';

export const getListings = async (params: Record<string, string> = {}): Promise<Listing[]> => {
    if (!REPLIERS_API_KEY) {
        console.warn('REPLIERS_API_KEY is not set. Returning mock data.');
        return MOCK_LISTINGS;
    }

    try {
        const query = new URLSearchParams(params).toString();
        const headers = { 'REPLIERS-API-KEY': REPLIERS_API_KEY };
        const res = await fetch(`${REPLIERS_URL}?${query}`, { headers, next: { revalidate: 3600 } });

        if (!res.ok) {
            throw new Error(`Failed to fetch listings: ${res.statusText}`);
        }

        const data = await res.json();
        return data.listings; // Adjust based on actual API response structure
    } catch (error) {
        console.error(error);
        return MOCK_LISTINGS;
    }
};

export const getListingByMls = async (mlsNumber: string): Promise<Listing | null> => {
    if (!REPLIERS_API_KEY) {
        return MOCK_LISTINGS.find(l => l.mlsNumber === mlsNumber) || null;
    }
    // Implementation for real fetch would go here
    return null;
}

// Mock Data for Phase 1 Development
const MOCK_LISTINGS: Listing[] = [
    {
        mlsNumber: 'E1234567',
        price: 899000,
        status: 'Active',
        listDate: '2025-11-15',
        address: {
            streetNumber: '123',
            streetName: 'Queen St E',
            city: 'Toronto',
            province: 'ON',
            postalCode: 'M4L 1C4',
            neighborhood: 'Leslieville'
        },
        details: {
            style: 'Condo',
            bedrooms: 2,
            bathrooms: 2,
            sqft: '800-999',
            parkingSpaces: 1,
            garageSpaces: 1,
            description: 'Stunning industrial loft in the heart of Leslieville.'
        },
        images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop'],
        daysOnMarket: 12,
        geo: { lat: 43.662, lng: -79.333 }
    },
    {
        mlsNumber: 'W7654321',
        price: 1250000,
        status: 'Active',
        listDate: '2025-11-10',
        address: {
            streetNumber: '45',
            streetName: 'Ossington Ave',
            city: 'Toronto',
            province: 'ON',
            postalCode: 'M6J 2Y9',
            neighborhood: 'Trinity-Bellwoods'
        },
        details: {
            style: 'Townhouse',
            bedrooms: 3,
            bathrooms: 3,
            sqft: '1500-2000',
            parkingSpaces: 1,
            garageSpaces: 0,
            description: 'Modern townhouse steps from Trinity Bellwoods park.'
        },
        images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop'],
        daysOnMarket: 5,
        geo: { lat: 43.646, lng: -79.419 }
    }
];
