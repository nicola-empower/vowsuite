import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Couple } from '../../types';
import clsx from 'clsx';

export default function ClientHome() {
    const { couple, isMobileView } = useOutletContext<{ couple: Couple; isMobileView: boolean }>();

    return (
        <div className="min-h-screen flex flex-col md:flex-row animate-fade-in">
            {/* Left Side - Video Section */}
            {/* Hidden if isMobileView is true, OR if screen is small (md:block handles the CSS media query part) */}
            <div className={clsx(
                "w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden bg-black",
                isMobileView ? "hidden" : "hidden md:block"
            )}>
                <video
                    className="w-full h-full object-cover opacity-80"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/vowsuite.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20" />

                {/* Overlay Text on Video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center z-10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
                        {couple.partner1Name} & {couple.partner2Name}
                    </h1>
                    <div className="inline-block border-y border-white/80 py-2 px-8 text-xl md:text-2xl drop-shadow-md">
                        {couple.weddingDate}
                    </div>
                </div>
            </div>

            {/* Right Side - Scrolling Text Section */}
            <div className={clsx(
                "h-[50vh] md:h-screen overflow-y-auto bg-white/95 backdrop-blur-sm relative transition-all duration-500",
                isMobileView ? "w-full h-screen" : "w-full md:w-1/2"
            )}>
                {/* Background Image for Right Side (Subtle) */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                    style={{ backgroundImage: `url(${couple.theme.backgroundImage})` }}
                />

                <div className="relative z-10 p-8 md:p-16 space-y-12 min-h-full flex flex-col justify-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[var(--primary-color)]">Our Story</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {couple.story}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We are so excited to celebrate our special day with you.
                            This app is your guide to everything happening during our wedding weekend.
                            Please check the schedule, browse the menu, and find your seat!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[var(--primary-color)]">The Venue</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Join us at a location that means the world to us.
                            We've prepared a beautiful evening of celebration, love, and joy.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 italic text-center">
                            "Love is not just looking at each other, it's looking in the same direction."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
