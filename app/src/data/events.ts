import { Event } from '../types';

export const events: Event[] = [
    { id: 'e1', coupleId: 'c1', title: 'Ceremony', time: '14:00', description: 'The main event!', location: 'Main Hall' },
    { id: 'e2', coupleId: 'c1', title: 'Cocktail Hour', time: '15:30', description: 'Drinks and canapés.', location: 'Garden' },
    { id: 'e3', coupleId: 'c1', title: 'Dinner', time: '17:00', description: 'Three-course meal.', location: 'Banquet Room' },
    { id: 'e4', coupleId: 'c1', title: 'First Dance', time: '19:00', description: 'Join us on the dance floor.', location: 'Banquet Room' },
    { id: 'e5', coupleId: 'c1', title: 'Party', time: '20:00', description: 'Dance the night away!', location: 'Banquet Room' },
    // Add more events for other couples as needed, for now reusing logic or adding generic ones
];
