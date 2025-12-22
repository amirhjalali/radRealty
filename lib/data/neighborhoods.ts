export interface NeighborhoodData {
    slug: string;
    name: string;
    heroImage: string;
    shortDescription: string;
    fullDescription: string;
    stats: {
        avgPrice: number;
        avgDom: number; // Days on Market
        marketTrend: 'up' | 'down' | 'stable';
        activeListings: number;
        soldLast30Days: number;
    };
    highlights: string[];
}

export const MOCK_NEIGHBORHOODS: NeighborhoodData[] = [
    {
        slug: 'leslieville',
        name: 'Leslieville',
        heroImage: 'https://images.unsplash.com/photo-1517725350993-4a11b61c8a14?q=80&w=2670&auto=format&fit=crop',
        shortDescription: 'The brunch capital of Toronto. Historic row homes meet modern condos.',
        fullDescription: "Leslieville has transformed from a quiet industrial district into one of Toronto's most vibrant residential pockets. Known for its 'village within a city' feel, it attracts young families and creative professionals who value community, walkability, and independent businesses. Queen Street East is the artery, lined with cafes, bistros, and vintage shops.",
        stats: {
            avgPrice: 1250000,
            avgDom: 9,
            marketTrend: 'up',
            activeListings: 24,
            soldLast30Days: 15
        },
        highlights: ['Queen St East Retail Strip', 'Jimmy Simpson Park', 'Access to DVP', 'Historic Brick Architecture']
    },
    {
        slug: 'trinity-bellwoods',
        name: 'Trinity-Bellwoods',
        heroImage: 'https://images.unsplash.com/photo-1582298533816-d3c52e16d516?q=80&w=2670&auto=format&fit=crop',
        shortDescription: 'The trendsetter\'s paradise. Park life, culture, and stunning Victorians.',
        fullDescription: "Trinity-Bellwoods is synonymous with Toronto cool. Centered around the massive park that bears its name, this neighborhood offers a mix of grand Victorian homes and sleek modern infills. It is the epicenter of the city's cultural scene, flanking the trendy Ossington strip.",
        stats: {
            avgPrice: 1850000,
            avgDom: 7,
            marketTrend: 'stable',
            activeListings: 12,
            soldLast30Days: 8
        },
        highlights: ['Trinity Bellwoods Park', 'Ossington Nightlife', 'Dundas West Dining', 'Highly Walkable']
    },
    {
        slug: 'high-park',
        name: 'High Park',
        heroImage: 'https://images.unsplash.com/photo-1490212879590-449e79391bc4?q=80&w=2670&auto=format&fit=crop',
        shortDescription: 'Nature in the city. Extensive trails, cherry blossoms, and family estates.',
        fullDescription: 'High Park serves as the green lung of the west end. Characterized by winding streets, rolling hills, and grand Edwardian homes, it offers a suburban tranquility just minutes from the Bloor subway line. It is a forever-home destination for families.',
        stats: {
            avgPrice: 2100000,
            avgDom: 14,
            marketTrend: 'up',
            activeListings: 8,
            soldLast30Days: 5
        },
        highlights: ['400-Acre Park', 'Proximity to Bloor Stick', 'Exceptional Schools', 'Subway Access']
    }
];
