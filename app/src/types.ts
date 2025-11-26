export interface Guest {
    id: string;
    name: string;
    email?: string;
    rsvpStatus: 'pending' | 'accepted' | 'declined';
    dietaryRequirements?: string;
    tableAssignment?: string;
    plusOne?: boolean;
}

export interface VendorStatus {
    id: string;
    category: string; // e.g., "Photography", "Catering"
    vendorName: string;
    status: 'researching' | 'contacted' | 'booked' | 'paid';
    totalCost: number;
    depositPaid: number;
    balanceDue: number;
    dueDate?: string;
}

export interface Budget {
    totalBudget: number;
    allocated: number;
    spent: number;
}

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    backgroundImage: string;
}

export interface Couple {
    id: string;
    partner1Name: string;
    partner2Name: string;
    weddingDate: string;
    email: string;
    phone: string;
    venueId: string;
    theme: Theme;
    story: string;
    guests: Guest[];
    budget: Budget;
    vendors: VendorStatus[];
    checklistProgress: number; // Percentage
}

export interface Supplier {
    id: string;
    name: string;
    category: string;
    rating: number;
    priceRange: string;
    imageUrl: string;
    description: string;
    location: string;
}

export interface Venue {
    id: string;
    name: string;
    location: string;
    capacity: number;
    price: number;
    imageUrl: string;
    description: string;
    rating: number;
}

export interface Event {
    id: string;
    time: string;
    title: string;
    description: string;
    location?: string;
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    type: 'starter' | 'main' | 'dessert' | 'drink';
    dietaryInfo?: string[];
}
