import React, { useState } from 'react';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import { couples } from '../data/couples';
import { Home, Calendar, Utensils, Users, Image as ImageIcon, Menu as MenuIcon, X, Smartphone } from 'lucide-react';
import clsx from 'clsx';

export default function ClientLayout() {
    const { clientId } = useParams();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const couple = couples.find(c => c.id === clientId);

    if (!couple) {
        return <div className="p-8 text-center">Client not found</div>;
    }

    // Determine if we are in "Guest View" or "Bride View"
    const isGuestView = location.pathname.includes('/guest');

    // Define navigation items based on view
    const navItems = isGuestView ? [
        { icon: Home, label: 'Home', path: `/client/${clientId}/guest` },
        { icon: Calendar, label: 'Schedule', path: `/client/${clientId}/guest/schedule` },
        { icon: Utensils, label: 'Menu', path: `/client/${clientId}/guest/menu` },
        { icon: Users, label: 'Seating', path: `/client/${clientId}/guest/seating` },
        { icon: ImageIcon, label: 'Photos', path: `/client/${clientId}/guest/photos` },
    ] : [
        { icon: Home, label: 'Dashboard', path: `/client/${clientId}` },
        { icon: Users, label: 'Guests', path: `/client/${clientId}/guests` },
        { icon: Utensils, label: 'Budget', path: `/client/${clientId}/budget` },
        { icon: Calendar, label: 'Checklist', path: `/client/${clientId}/checklist` },
    ];

    return (
        <div
            className="min-h-screen transition-colors duration-500"
            style={{
                backgroundColor: couple.theme.primaryColor + '10', // 10% opacity
                fontFamily: couple.theme.fontFamily
            }}
        >
            {/* Mobile Toggle Button (Visible only on desktop for demo purposes) */}
            <div className="fixed bottom-4 right-4 z-50 hidden md:block">
                <button
                    onClick={() => setIsMobileView(!isMobileView)}
                    className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                    title="Toggle Mobile View"
                >
                    <Smartphone className="w-5 h-5" />
                    <span className="text-sm font-medium">{isMobileView ? 'Exit Mobile View' : 'View as Mobile'}</span>
                </button>
            </div>

            {/* Main Content Wrapper - Constrains width if isMobileView is true */}
            <div className={clsx(
                "transition-all duration-500 ease-in-out mx-auto min-h-screen flex flex-col",
                isMobileView ? "max-w-[375px] shadow-2xl border-x border-gray-200 bg-white my-8 rounded-[3rem] overflow-hidden ring-8 ring-gray-900" : "w-full"
            )}>
                {/* Navigation */}
                <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between items-center h-16">
                            <div className="font-bold text-xl truncate" style={{ color: couple.theme.primaryColor }}>
                                {couple.partner1Name} & {couple.partner2Name}
                            </div>

                            {/* Desktop Nav */}
                            <div className="hidden md:flex space-x-1">
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={clsx(
                                                "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center",
                                                isActive
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            )}
                                        >
                                            <item.icon className="w-4 h-4 mr-2" />
                                            {item.label}
                                        </Link>
                                    );
                                })}
                                {/* Switch View Link */}
                                <Link
                                    to={isGuestView ? `/client/${clientId}` : `/client/${clientId}/guest`}
                                    className="ml-4 px-3 py-2 rounded-lg text-xs font-medium border border-gray-200 text-gray-500 hover:bg-gray-50"
                                >
                                    {isGuestView ? 'Switch to Planner' : 'Preview App'}
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                                >
                                    {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-gray-100 bg-white">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={clsx(
                                                "block px-3 py-2 rounded-lg text-base font-medium flex items-center",
                                                isActive
                                                    ? "bg-gray-50 text-gray-900"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            )}
                                        >
                                            <item.icon className="w-5 h-5 mr-3" />
                                            {item.label}
                                        </Link>
                                    );
                                })}
                                <div className="pt-4 border-t border-gray-100 mt-2">
                                    <Link
                                        to={isGuestView ? `/client/${clientId}` : `/client/${clientId}/guest`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        {isGuestView ? 'Switch to Planner View' : 'Preview Guest App'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>

                <main className="flex-1 overflow-y-auto">
                    <div className={clsx("mx-auto", isMobileView ? "px-0" : "max-w-7xl px-4 py-8")}>
                        <Outlet context={{ couple, isMobileView }} />
                    </div>
                </main>
            </div>
        </div>
    );
}
