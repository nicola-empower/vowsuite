import { Couple } from '../types';

export const couples: Couple[] = [
    {
        id: 'c1',
        partner1Name: 'Marie',
        partner2Name: 'John',
        weddingDate: '2024-06-15',
        email: 'marie.john@example.com',
        phone: '+44 7700 900001',
        venueId: 'v1',
        story: "We met at a coffee shop in London three years ago. John spilled his latte on my favorite scarf, and the rest is history! We can't wait to celebrate our love with all of our friends and family.",
        theme: {
            primaryColor: '#6366f1', // Indigo
            secondaryColor: '#a5b4fc',
            fontFamily: 'Playfair Display, serif',
            backgroundImage: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80',
        },
        guests: [
            { id: 'g1', name: 'Alice Smith', rsvpStatus: 'accepted', tableAssignment: 'Table 1', dietaryRequirements: 'Vegetarian' },
            { id: 'g2', name: 'Bob Jones', rsvpStatus: 'pending', plusOne: true },
            { id: 'g3', name: 'Charlie Brown', rsvpStatus: 'declined' },
            { id: 'g4', name: 'Diana Prince', rsvpStatus: 'accepted', tableAssignment: 'Table 1' },
        ],
        budget: {
            totalBudget: 30000,
            allocated: 25000,
            spent: 12000,
        },
        vendors: [
            { id: 'ven1', category: 'Venue', vendorName: 'Grand Hotel', status: 'booked', totalCost: 15000, depositPaid: 5000, balanceDue: 10000, dueDate: '2024-05-01' },
            { id: 'ven2', category: 'Photography', vendorName: 'Snapshots Inc', status: 'booked', totalCost: 2500, depositPaid: 500, balanceDue: 2000, dueDate: '2024-06-01' },
            { id: 'ven3', category: 'Florist', vendorName: 'Blooms & Co', status: 'contacted', totalCost: 1500, depositPaid: 0, balanceDue: 1500 },
        ],
        checklistProgress: 45,
    },
    {
        id: 'c2',
        partner1Name: 'Sophie',
        partner2Name: 'Tom',
        weddingDate: '2024-08-20',
        email: 'sophie.tom@example.com',
        phone: '+44 7700 900002',
        venueId: 'v2',
        story: "High school sweethearts who reconnected after university. Our love story has been a decade in the making.",
        theme: {
            primaryColor: '#be185d', // Pink
            secondaryColor: '#fbcfe8',
            fontFamily: 'Lora, serif',
            backgroundImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
        },
        guests: [
            { id: 'g5', name: 'Evan Wright', rsvpStatus: 'accepted', tableAssignment: 'Table A' },
            { id: 'g6', name: 'Fiona Green', rsvpStatus: 'accepted', tableAssignment: 'Table A' },
        ],
        budget: {
            totalBudget: 20000,
            allocated: 18000,
            spent: 5000,
        },
        vendors: [
            { id: 'ven4', category: 'Venue', vendorName: 'Rustic Barn', status: 'booked', totalCost: 8000, depositPaid: 2000, balanceDue: 6000, dueDate: '2024-07-20' },
            { id: 'ven5', category: 'Catering', vendorName: 'Tasty Bites', status: 'researching', totalCost: 5000, depositPaid: 0, balanceDue: 5000 },
        ],
        checklistProgress: 20,
    },
    {
        id: 'c3',
        partner1Name: 'Emily',
        partner2Name: 'David',
        weddingDate: '2024-09-10',
        email: 'emily.david@example.com',
        phone: '+44 7700 900003',
        venueId: 'v3',
        story: "We bonded over our love for hiking and adventure. Our wedding will be the start of our greatest adventure yet.",
        theme: {
            primaryColor: '#059669', // Emerald
            secondaryColor: '#a7f3d0',
            fontFamily: 'Merriweather, serif',
            backgroundImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80',
        },
        guests: [],
        budget: {
            totalBudget: 40000,
            allocated: 10000,
            spent: 2000,
        },
        vendors: [],
        checklistProgress: 10,
    },
    {
        id: 'c4',
        partner1Name: 'Sarah',
        partner2Name: 'Michael',
        weddingDate: '2024-10-05',
        email: 'sarah.michael@example.com',
        phone: '+44 7700 900004',
        venueId: 'v4',
        story: "From colleagues to soulmates. We can't wait to share our special day with you.",
        theme: {
            primaryColor: '#d97706', // Amber
            secondaryColor: '#fde68a',
            fontFamily: 'Montserrat, sans-serif',
            backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
        },
        guests: [],
        budget: {
            totalBudget: 25000,
            allocated: 20000,
            spent: 15000,
        },
        vendors: [],
        checklistProgress: 60,
    },
    {
        id: 'c5',
        partner1Name: 'Jessica',
        partner2Name: 'James',
        weddingDate: '2024-12-12',
        email: 'jessica.james@example.com',
        phone: '+44 7700 900005',
        venueId: 'v5',
        story: "A winter wonderland wedding for a love that keeps us warm.",
        theme: {
            primaryColor: '#1d4ed8', // Blue
            secondaryColor: '#bfdbfe',
            fontFamily: 'Open Sans, sans-serif',
            backgroundImage: 'https://images.unsplash.com/photo-1544124339-422d9b6e0300?auto=format&fit=crop&q=80',
        },
        guests: [],
        budget: {
            totalBudget: 50000,
            allocated: 45000,
            spent: 40000,
        },
        vendors: [],
        checklistProgress: 80,
    },
];
