import React from 'react';
import { suppliers } from '../../data/suppliers';
import { Star, DollarSign } from 'lucide-react';

export default function SuppliersList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Suppliers</h1>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Add Supplier
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suppliers.map((supplier) => (
                    <div key={supplier.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div
                            className="h-48 bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${supplier.imageUrl})` }}
                        >
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold text-gray-800 flex items-center shadow-sm">
                                <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                                {supplier.rating}
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                                    {supplier.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-5 space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">{supplier.name}</h3>
                            <p className="text-gray-600 text-sm line-clamp-2">{supplier.description}</p>

                            <div className="flex items-center text-sm text-gray-500 pt-2 border-t border-gray-50">
                                <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                                {supplier.priceRange}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
