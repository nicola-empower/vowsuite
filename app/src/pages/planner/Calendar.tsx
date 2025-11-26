import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { couples } from '../../data/couples';

interface CalendarEvent {
    id: string;
    title: string;
    type: 'client' | 'kids' | 'personal' | 'work' | 'social';
    time: string;
    color: string;
}

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Helper to get days in month
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    // Helper to get first day of month
    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Generate events logic
    const getEventsForDay = (day: number): CalendarEvent[] => {
        const events: CalendarEvent[] = [];
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const dayOfWeek = date.getDay(); // 0 = Sun, 1 = Mon, ...
        const weekNum = Math.ceil(day / 7);

        // 1. Client Meetings (Rotating weekly)
        // Week 1 = Couple 1, Week 2 = Couple 2, etc.
        // Repeating every 6 weeks (5 couples + 1 break/catchup)
        const clientIndex = (weekNum - 1) % 6;
        if (dayOfWeek === 2 && clientIndex < 5) { // Tuesday
            events.push({
                id: `client-${day}`,
                title: `Meeting: ${couples[clientIndex].partner1Name} & ${couples[clientIndex].partner2Name}`,
                type: 'client',
                time: '10:00 AM',
                color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
            });
        }

        // 2. Kids Activities
        // Wendy: Mon/Wed
        if (dayOfWeek === 1) events.push({ id: `wendy-ballet-${day}`, title: "Wendy: Ballet", type: 'kids', time: '4:00 PM', color: 'bg-pink-100 text-pink-800 border-pink-200' });
        if (dayOfWeek === 3) events.push({ id: `wendy-piano-${day}`, title: "Wendy: Piano", type: 'kids', time: '5:00 PM', color: 'bg-pink-100 text-pink-800 border-pink-200' });

        // Michael: Tue/Thu
        if (dayOfWeek === 2) events.push({ id: `michael-football-${day}`, title: "Michael: Football", type: 'kids', time: '4:30 PM', color: 'bg-blue-100 text-blue-800 border-blue-200' });
        if (dayOfWeek === 4) events.push({ id: `michael-coding-${day}`, title: "Michael: Coding Club", type: 'kids', time: '5:00 PM', color: 'bg-blue-100 text-blue-800 border-blue-200' });

        // John: Mon/Fri
        if (dayOfWeek === 1) events.push({ id: `john-swim-${day}`, title: "John: Swimming", type: 'kids', time: '5:30 PM', color: 'bg-green-100 text-green-800 border-green-200' });
        if (dayOfWeek === 5) events.push({ id: `john-karate-${day}`, title: "John: Karate", type: 'kids', time: '4:00 PM', color: 'bg-green-100 text-green-800 border-green-200' });

        // 3. Personal Appointments (Rotating every 4 weeks)
        // Week 1: Dentist, Week 2: Doctor, Week 3: Optician, Week 4: Hairdresser
        if (dayOfWeek === 4 && weekNum % 4 === 1) events.push({ id: `dentist-${day}`, title: "Dentist Appt", type: 'personal', time: '11:00 AM', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' });
        if (dayOfWeek === 4 && weekNum % 4 === 2) events.push({ id: `doctor-${day}`, title: "GP Check-up", type: 'personal', time: '9:00 AM', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' });
        if (dayOfWeek === 4 && weekNum % 4 === 3) events.push({ id: `optician-${day}`, title: "Optician", type: 'personal', time: '2:00 PM', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' });

        // 4. Date Night (Every 2 weeks on Saturday)
        if (dayOfWeek === 6 && weekNum % 2 === 0) {
            events.push({ id: `date-${day}`, title: "Date Night ❤️", type: 'social', time: '7:30 PM', color: 'bg-red-100 text-red-800 border-red-200' });
        }

        // 5. New Client Meetings (Every 3 weeks on Wednesday)
        if (dayOfWeek === 3 && weekNum % 3 === 0) {
            events.push({ id: `new-client-${day}`, title: "New Client Consult", type: 'work', time: '1:00 PM', color: 'bg-purple-100 text-purple-800 border-purple-200' });
        }

        // 6. Vendor Meetings (Weekly Friday, rotating)
        const vendorTypes = ['Venue', 'Florist', 'Caterer', 'Dress Shop'];
        if (dayOfWeek === 5) {
            const vendorType = vendorTypes[weekNum % 4];
            events.push({ id: `vendor-${day}`, title: `Meeting: ${vendorType}`, type: 'work', time: '11:00 AM', color: 'bg-gray-100 text-gray-800 border-gray-200' });
        }

        // 7. Chores (Dry Cleaning)
        if (dayOfWeek === 1) events.push({ id: `dry-drop-${day}`, title: "Drop Dry Cleaning", type: 'personal', time: '8:30 AM', color: 'bg-gray-50 text-gray-600 border-gray-200' });
        if (dayOfWeek === 4) events.push({ id: `dry-pick-${day}`, title: "Pick up Dry Cleaning", type: 'personal', time: '5:30 PM', color: 'bg-gray-50 text-gray-600 border-gray-200' });

        // 8. Big Monthly Event (Randomly placed on a Sunday)
        if (dayOfWeek === 0 && day === 20) { // Fixed date for demo stability
            events.push({ id: `anniversary-${day}`, title: "Parents' Anniversary Dinner", type: 'social', time: '6:00 PM', color: 'bg-orange-100 text-orange-800 border-orange-200' });
        }

        // 9. Business Development (Every Sunday)
        if (dayOfWeek === 0) {
            events.push({ id: `biz-dev-${day}`, title: "Business Dev: Website & Blogs", type: 'work', time: '10:00 AM', color: 'bg-teal-100 text-teal-800 border-teal-200' });
        }

        // 10. Coffee with Girls (2nd Wednesday)
        if (dayOfWeek === 3 && weekNum === 2) {
            events.push({ id: `coffee-${day}`, title: "Coffee: Annmarie, Sarah, Lyn, Mum", type: 'social', time: '10:30 AM', color: 'bg-rose-100 text-rose-800 border-rose-200' });
        }

        return events;
    };

    const renderCalendarGrid = () => {
        const totalDays = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const grid = [];

        // Empty cells for previous month
        for (let i = 0; i < firstDay; i++) {
            grid.push(<div key={`empty-${i}`} className="min-h-[120px] bg-gray-50 border border-gray-100"></div>);
        }

        // Days of current month
        for (let day = 1; day <= totalDays; day++) {
            const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();
            const events = getEventsForDay(day);

            grid.push(
                <div key={day} className={`min-h-[120px] border border-gray-100 p-2 bg-white hover:bg-gray-50 transition-colors group relative overflow-hidden`}>
                    <div className="flex justify-between items-start mb-2">
                        <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-indigo-600 text-white' : 'text-gray-700'}`}>
                            {day}
                        </span>
                        {events.length > 0 && (
                            <span className="text-xs text-gray-400 font-medium">{events.length} events</span>
                        )}
                    </div>

                    <div className="space-y-1.5">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className={`text-[10px] p-1.5 rounded border ${event.color} truncate cursor-pointer hover:opacity-80 transition-opacity`}
                                title={event.title}
                            >
                                <div className="font-semibold truncate">{event.title}</div>
                                <div className="opacity-75 text-[9px]">{event.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return grid;
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
                    <p className="text-gray-500 mt-1">Manage your busy schedule</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                        Today
                    </button>
                    <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 p-1">
                        <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="w-5 h-5 text-gray-500" /></button>
                        <span className="px-4 text-sm font-medium text-gray-900 min-w-[120px] text-center">
                            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </span>
                        <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-5 h-5 text-gray-500" /></button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                    {days.map(day => (
                        <div key={day} className="py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 bg-gray-200 gap-px">
                    {renderCalendarGrid()}
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>Client Meetings</div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>Wendy</div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>Michael</div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>John</div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>Personal</div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>Social</div>
                <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>Business Dev</div>
            </div>
        </div>
    );
}
