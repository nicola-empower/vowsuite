import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Couple } from '../../types';
import { checklistItems } from '../../data/checklist';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import clsx from 'clsx';

export default function ClientChecklist() {
    const { couple } = useOutletContext<{ couple: Couple }>();

    // In a real app, we would filter checklist items specific to this couple
    // For now, we'll use the mock checklist items

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Your Checklist</h1>
                    <p className="text-gray-500 mt-1">Stay on track with your wedding planning</p>
                </div>
                <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {couple.checklistProgress}% Completed
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-50">
                    {checklistItems.map((item) => (
                        <div key={item.id} className="p-6 flex items-start hover:bg-gray-50 transition-colors group cursor-pointer">
                            <div className="mt-1 mr-4">
                                {item.status === 'completed' ? (
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                ) : item.status === 'in-progress' ? (
                                    <Clock className="w-6 h-6 text-amber-500" />
                                ) : (
                                    <Circle className="w-6 h-6 text-gray-300 group-hover:text-indigo-500 transition-colors" />
                                )}
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className={clsx("text-lg font-medium", item.status === 'completed' ? "text-gray-400 line-through" : "text-gray-900")}>
                                        {item.task}
                                    </h3>
                                    <span className={clsx("text-xs font-medium px-2.5 py-0.5 rounded-full",
                                        item.status === 'completed' ? "bg-green-100 text-green-800" :
                                            item.status === 'in-progress' ? "bg-amber-100 text-amber-800" :
                                                "bg-gray-100 text-gray-800"
                                    )}>
                                        {item.status.replace('-', ' ')}
                                    </span>
                                </div>

                                <div className="flex items-center mt-2 text-sm text-gray-500 space-x-4">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{item.category}</span>
                                    <span>Due: {item.dueDate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
