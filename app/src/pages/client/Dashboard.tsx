import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Couple } from '../../types';
import { PieChart, Users, CheckSquare, PoundSterling, ArrowRight } from 'lucide-react';

export default function ClientDashboard() {
    const { couple } = useOutletContext<{ couple: Couple }>();

    // Calculate stats
    const totalGuests = couple.guests.length;
    const acceptedGuests = couple.guests.filter(g => g.rsvpStatus === 'accepted').length;
    const budgetSpentPercentage = Math.round((couple.budget.spent / couple.budget.totalBudget) * 100);
    const vendorsBooked = couple.vendors.filter(v => v.status === 'booked' || v.status === 'paid').length;
    const totalVendors = couple.vendors.length;

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, {couple.partner1Name}!</h1>
                    <p className="text-gray-500 mt-2">Here's what's happening with your wedding planning.</p>
                </div>
                <div className="text-right">
                    <div className="text-sm text-gray-500">Days to go</div>
                    <div className="text-3xl font-bold text-indigo-600">
                        {Math.ceil((new Date(couple.weddingDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-pink-50 rounded-lg">
                            <Users className="w-6 h-6 text-pink-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Guests</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{acceptedGuests} / {totalGuests}</div>
                    <div className="text-sm text-gray-500 mt-1">RSVPs Accepted</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                            <PoundSterling className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Budget</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{budgetSpentPercentage}%</div>
                    <div className="text-sm text-gray-500 mt-1">Budget Spent</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-amber-50 rounded-lg">
                            <CheckSquare className="w-6 h-6 text-amber-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Checklist</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{couple.checklistProgress}%</div>
                    <div className="text-sm text-gray-500 mt-1">Completed</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <PieChart className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Vendors</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{vendorsBooked} / {totalVendors}</div>
                    <div className="text-sm text-gray-500 mt-1">Booked</div>
                </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Next Steps</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                            Finalise guest list
                        </li>
                        <li className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                            Book florist
                        </li>
                        <li className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                            Send invitations
                        </li>
                    </ul>
                    <Link to="checklist" className="inline-flex items-center text-indigo-600 font-medium mt-4 hover:text-indigo-700">
                        View full checklist <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <PoundSterling className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Deposit paid to Grand Hotel</p>
                                <p className="text-xs text-gray-500">Yesterday</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <Users className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">New RSVP from Alice Smith</p>
                                <p className="text-xs text-gray-500">2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share App / QR Code */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 bg-white p-2 border border-gray-200 rounded-lg">
                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://portfolio-nicola-berry.vercel.app/`}
                            alt="App QR Code"
                            className="w-32 h-32"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Share Your App</h3>
                        <p className="text-gray-600 mb-4">
                            Let your guests access your wedding details, RSVP, and view the schedule by scanning this QR code.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                                Download QR Code
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
