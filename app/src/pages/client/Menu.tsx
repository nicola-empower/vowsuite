import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Couple } from '../../types';
import { menuItems } from '../../data/menu';
import { Utensils } from 'lucide-react';

export default function Menu() {
    const { couple } = useOutletContext<{ couple: Couple }>();
    const items = menuItems.filter(m => m.coupleId === 'c1'); // Hardcoded for demo

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
    }, {} as Record<string, typeof items>);

    const order = ['Starter', 'Main', 'Dessert', 'Drink'];

    return (
        <div className="max-w-2xl mx-auto px-4 py-8 space-y-12 animate-fade-in">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-[var(--primary-color)]">The Menu</h1>
                <p className="text-gray-500">A feast for the senses</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[var(--primary-color)]" />

                <div className="space-y-10">
                    {order.map((type) => (
                        groupedItems[type] && (
                            <div key={type} className="space-y-4">
                                <h2 className="text-xl font-serif italic text-center text-gray-400 border-b border-gray-100 pb-2">
                                    {type}
                                </h2>
                                <div className="space-y-6">
                                    {groupedItems[type].map((item) => (
                                        <div key={item.id} className="text-center space-y-1">
                                            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                            {item.dietaryInfo.length > 0 && (
                                                <div className="flex justify-center gap-2 mt-1">
                                                    {item.dietaryInfo.map(info => (
                                                        <span key={info} className="text-xs border border-gray-200 px-2 py-0.5 rounded text-gray-400">
                                                            {info}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Utensils className="w-6 h-6 text-[var(--primary-color)] mx-auto opacity-50" />
                </div>
            </div>
        </div>
    );
}
