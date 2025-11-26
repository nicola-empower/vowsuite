import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
    { id: 'm1', coupleId: 'c1', name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil.', type: 'Starter', dietaryInfo: ['V', 'VG'] },
    { id: 'm2', coupleId: 'c1', name: 'Roast Chicken', description: 'Served with seasonal vegetables.', type: 'Main', dietaryInfo: ['GF'] },
    { id: 'm3', coupleId: 'c1', name: 'Chocolate Cake', description: 'Rich chocolate cake with berry sauce.', type: 'Dessert', dietaryInfo: ['V'] },
    { id: 'm4', coupleId: 'c1', name: 'House Wine', description: 'Red or White.', type: 'Drink', dietaryInfo: [] },
];
