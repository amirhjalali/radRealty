export interface Address {
    streetNumber: string;
    streetName: string;
    city: string;
    province: string;
    postalCode: string;
    neighborhood?: string;
}

export interface PropertyDetails {
    style: string;
    bedrooms: number;
    bathrooms: number;
    sqft?: string;
    parkingSpaces: number;
    garageSpaces: number;
    yearBuilt?: string;
    description: string;
}

export interface Listing {
    mlsNumber: string;
    price: number;
    originalPrice?: number;
    status: 'Active' | 'Sold' | 'Terminated' | 'Suspended' | 'Expired';
    listDate: string;
    soldDate?: string;
    soldPrice?: number;
    address: Address;
    details: PropertyDetails;
    images: string[];
    daysOnMarket: number;
    agent?: {
        name: string;
        brokerage: string;
    };
    geo: {
        lat: number;
        lng: number;
    };
}
