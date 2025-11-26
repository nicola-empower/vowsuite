import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Couple } from '../../types';
import { Upload, Heart } from 'lucide-react';

export default function Photos() {
    const { couple } = useOutletContext<{ couple: Couple }>();

    // Mock photos
    const photos = [
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-[var(--primary-color)]">Moments</h1>
                <p className="text-gray-500">Capture and share the love</p>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]/5 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-[var(--primary-color)]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Upload Photos</h3>
                <p className="text-sm text-gray-500 mt-1">Share your favorite moments from the day</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((url, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden relative group">
                        <img
                            src={url}
                            alt={`Wedding moment ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button className="bg-white/90 p-2 rounded-full text-red-500 hover:scale-110 transition-transform">
                                <Heart className="w-5 h-5 fill-current" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
