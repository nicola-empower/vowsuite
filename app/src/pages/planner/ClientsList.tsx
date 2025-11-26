import React from 'react';
import { Link } from 'react-router-dom';
import { couples } from '../../data/couples';
import { Search, Filter, MoreHorizontal, User, Calendar, CheckSquare, PoundSterling } from 'lucide-react';

export default function ClientsList() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
                    <p className="text-gray-500 mt-1">Manage your active weddings</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Add Client
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-3 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {couples.map((couple) => (
                        <Link
                            key={couple.id}
                            to={`/client/${couple.id}`}
                            className="block bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow overflow-hidden group"
                        >
                            <div
                                className="h-32 bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${couple.theme.backgroundImage})` }}
                            >
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-bold">{couple.partner1Name} & {couple.partner2Name}</h3>
                                    <div className="flex items-center text-sm opacity-90 mt-1">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {couple.weddingDate}
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="w-full bg-gray-100 rounded-full h-1.5">
                                    <div
                                        className="bg-indigo-600 h-1.5 rounded-full"
                                        style={{ width: `${couple.checklistProgress}%` }}
                                    />
                                </div>

                                <div className="pt-2 flex justify-between items-center text-xs text-gray-500">
                                    <span>{couple.guests.length} Guests</span>
                                    <span>{couple.vendors.length} Vendors</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}
