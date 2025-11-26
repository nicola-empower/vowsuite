import React from 'react';
import { Link } from 'react-router-dom';
import { couples } from '../../data/couples';
import { Users, Calendar, CheckSquare, ArrowRight, Bell } from 'lucide-react';

export default function PlannerDashboard() {
    const activeWeddings = couples.length;
    const upcomingWeddings = couples.filter(c => {
        const date = new Date(c.weddingDate);
        const now = new Date();
        const diffTime = date.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 && diffDays <= 30;
    }).length;

    const totalGuests = couples.reduce((acc, c) => acc + c.guests.length, 0);

    // Mock aggregate checklist stats
    const pendingTasks = couples.reduce((acc, c) => acc + (100 - c.checklistProgress), 0); // Mock calculation

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Welcome back, Nicola</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                        NP
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-indigo-50 rounded-lg">
                            <Users className="w-6 h-6 text-indigo-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Total</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{activeWeddings}</div>
                    <div className="text-sm text-gray-500 mt-1">Active Weddings</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-pink-50 rounded-lg">
                            <Calendar className="w-6 h-6 text-pink-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Upcoming</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{upcomingWeddings}</div>
                    <div className="text-sm text-gray-500 mt-1">Next 30 Days</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-emerald-50 rounded-lg">
                            <Users className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Guests</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{totalGuests}</div>
                    <div className="text-sm text-gray-500 mt-1">Total Guests Managed</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-amber-50 rounded-lg">
                            <CheckSquare className="w-6 h-6 text-amber-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-400">Action Items</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-500 mt-1">Requires Attention</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-4 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Marie & John updated their guest list</p>
                                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-green-500 mr-4 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Sophie & Tom paid venue deposit</p>
                                <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 mr-4 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">New inquiry from Sarah & Michael</p>
                                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-6 text-sm text-indigo-600 font-medium hover:text-indigo-700">
                        View all activity
                    </button>
                </div>

                {/* Global Checklist Overview */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-900">Client Progress</h3>
                        <Link to="/planner/clients" className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center">
                            View all <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {couples.slice(0, 3).map(couple => (
                            <div key={couple.id} className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-gray-900">{couple.partner1Name} & {couple.partner2Name}</span>
                                    <span className="text-xs font-medium text-gray-500">{couple.checklistProgress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-indigo-600 h-2 rounded-full"
                                        style={{ width: `${couple.checklistProgress}%` }}
                                    />
                                </div>
                                <div className="mt-2 text-xs text-gray-500 flex justify-between">
                                    <span>Next: Finalise Menu</span>
                                    <span className="text-amber-600">Due in 5 days</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
