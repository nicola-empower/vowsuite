import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Couple } from '../../types';
import { Search, User } from 'lucide-react';

export default function Seating() {
    const { couple } = useOutletContext<{ couple: Couple }>();
    const [searchTerm, setSearchTerm] = useState('');

    // Mock guests
    const guests = [
        { id: 1, name: 'Alice Smith', table: 1 },
        { id: 2, name: 'Bob Jones', table: 1 },
        { id: 3, name: 'Charlie Brown', table: 2 },
        { id: 4, name: 'Diana Prince', table: 2 },
        { id: 5, name: 'Evan Wright', table: 3 },
        { id: 6, name: 'Fiona Green', table: 3 },
    ];

    const filteredGuests = guests.filter(guest =>
        guest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-[var(--primary-color)]">Find Your Seat</h1>
                <p className="text-gray-500">We've saved a spot just for you</p>
            </div>

            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search for your name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 outline-none transition-all shadow-sm"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGuests.map((guest) => (
                    <div key={guest.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                <User className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-gray-900">{guest.name}</span>
                        </div>
                        <div className="text-2xl font-bold text-[var(--primary-color)]">
                            {guest.table}
                        </div>
                    </div>
                ))}
                {filteredGuests.length === 0 && (
                    <div className="col-span-full text-center py-8 text-gray-500">
                        No guests found matching "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
}
