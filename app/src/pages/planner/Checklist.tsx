import React from 'react';
import { checklistItems } from '../../data/checklist';
import { CheckCircle, Circle, Clock, Plus } from 'lucide-react';
import clsx from 'clsx';

export default function Checklist() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Wedding Checklist</h1>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Add Task
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex space-x-4">
                        <button className="text-indigo-600 font-medium border-b-2 border-indigo-600 pb-2">All Tasks</button>
                        <button className="text-gray-500 font-medium hover:text-gray-700 pb-2">Pending</button>
                        <button className="text-gray-500 font-medium hover:text-gray-700 pb-2">Completed</button>
                    </div>
                </div>

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
