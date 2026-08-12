import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    return (
        // Dark grid theme background setup
        <div className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between selection:bg-yellow-400 selection:text-black font-sans">
            
            {/* Grid Overlay Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            {/* Floating Navigation Bar */}
            <Navbar />

            {/* Dynamic Content */}
            <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-10">
                <Outlet />
            </main>
        </div>
    );
};

export default Main;