import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
const Navbar: React.FC = () => {

   const navigate = useNavigate(); 

   const homeNavigate = (): void => {
            navigate('/'); 
   }
   
    return (
        <nav className="bg-black sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center">
                        <div className="absolute top-4 left-12 flex-shrink-0 ">
                            {/* Add your logo or brand here */}
                            <span className="text-white font-semibold text-lg">Logo</span>
                        </div>
                    </div>o
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* Add your navigation links here */}
                            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" onClick={homeNavigate}>Home</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">About</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</a>
                        </div>
                    </div>
                    <Button className='bg-slate-400 hover:bg-slate-200 hover:text-black absolute top-4 right-36'>Sign up</Button>
                    <Button className='bg-green-400 hover:bg-slate-200 hover:text-black absolute top-4 right-12'>Log In</Button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;