import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Couple } from '../../types';
import { PoundSterling, PieChart, AlertCircle, CheckCircle } from 'lucide-react';

export default function BudgetTracker() {
    const { couple } = useOutletContext<{ couple: Couple }>();
    const { budget, vendors } = couple;

    const remainingBudget = budget.totalBudget - budget.spent;
    const percentageSpent = Math.round((budget.spent / budget.totalBudget) * 100);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Budget Tracker</h1>
                    <p className="text-gray-500 mt-1">Track your expenses and vendor payments</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-sm font-medium text-gray-700">
                    Total Budget: <span className="text-indigo-600 font-bold">£{budget.totalBudget.toLocaleString()}</span>
                </div>
            </div>

            {/* Budget Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500 mb-1">Total Spent</div>
                    <div className="text-3xl font-bold text-gray-900">£{budget.spent.toLocaleString()}</div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${percentageSpent}%` }}></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2 text-right">{percentageSpent}% of budget</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500 mb-1">Remaining</div>
                    <div className="text-3xl font-bold text-emerald-600">£{remainingBudget.toLocaleString()}</div>
                    <p className="text-xs text-gray-400 mt-2">Available for remaining vendors</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500 mb-1">Pending Payments</div>
                    <div className="text-3xl font-bold text-amber-600">
                        £{vendors.reduce((acc, v) => acc + v.balanceDue, 0).toLocaleString()}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Total balance due to vendors</p>
                </div>
            </div>

            {/* Vendor List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-bold text-gray-900">Vendor Payments</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-medium">
                            <tr>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Vendor</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Total Cost</th>
                                <th className="px-6 py-3 text-right">Paid</th>
                                <th className="px-6 py-3 text-right">Balance</th>
                                <th className="px-6 py-3">Due Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vendors.length > 0 ? (
                                vendors.map((vendor) => (
                                    <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{vendor.category}</td>
                                        <td className="px-6 py-4 text-gray-600">{vendor.vendorName}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${vendor.status === 'paid' ? 'bg-green-100 text-green-800' :
                                                    vendor.status === 'booked' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-gray-100 text-gray-800'}`}>
                                                {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-medium">£{vendor.totalCost.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-right text-green-600">£{vendor.depositPaid.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-right text-amber-600">£{vendor.balanceDue.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">{vendor.dueDate || '-'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                                        No vendors added yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
