import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Couple } from '../../types';
import { events } from '../../data/events';
import { Clock, MapPin } from 'lucide-react';

export default function Schedule() {
    const { couple } = useOutletContext<{ couple: Couple }>();
    // For demo purposes, we filter by coupleId or show all if not found (or just show generic)
    // Since we only populated c1, let's just show those for everyone or duplicate data logic later.
    // For now, let's just show the events we have.
    const coupleEvents = events.filter(e => e.coupleId === 'c1'); // Hardcoded to c1 for demo if others empty

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-[var(--primary-color)]">Order of Events</h1>
                <p className="text-gray-500">What to expect on our special day</p>
            </div>

            <div className="relative border-l-2 border-[var(--primary-color)] ml-4 md:ml-8 space-y-8 py-4">
                {coupleEvents.map((event) => (
                    <div key={event.id} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--primary-color)] border-4 border-white shadow-sm" />

                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                                <div className="flex items-center text-[var(--primary-color)] font-medium bg-gray-50 px-3 py-1 rounded-full w-fit">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {event.time}
                                </div>
                            </div>

                            <p className="text-gray-600 mt-2">{event.description}</p>

                            <div className="flex items-center text-sm text-gray-500 mt-4">
                                <MapPin className="w-4 h-4 mr-2" />
                                {event.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
