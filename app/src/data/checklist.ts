
export interface ChecklistItem {
    id: string;
    category: string;
    title: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate: string;
}

export const checklistItems: ChecklistItem[] = [
    { id: '1', title: 'Set the Date', category: 'Essentials', status: 'completed', dueDate: '2023-12-01' },
    { id: '2', title: 'Book Venue', category: 'Essentials', status: 'completed', dueDate: '2024-01-15' },
    { id: '3', title: 'Finalise Guest List', category: 'Guests', status: 'in-progress', dueDate: '2024-02-01' },
    { id: '4', title: 'Send Save the Dates', category: 'Guests', status: 'pending', dueDate: '2024-02-15' },
    { id: '5', title: 'Book Photographer', category: 'Vendors', status: 'completed', dueDate: '2024-03-01' },
    { id: '6', title: 'Choose Menu', category: 'Catering', status: 'pending', dueDate: '2024-04-01' },
    { id: '7', title: 'Organise Transport', category: 'Logistics', status: 'pending', dueDate: '2024-05-01' },
];
