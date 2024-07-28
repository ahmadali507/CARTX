import React from 'react';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { CartComponent } from './cart-component';
const Navbar: React.FC = () => {

   const navigate = useNavigate(); 

   const signInNavigate = (): void => {
            navigate('/auth/signIn'); 
   }

   const SignupNavigate = (): void =>{
    navigate('/auth/signUp')
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
                    <div className="hidden md:block w-[75%] ">
                        <div className="ml-10 flex flex-row justify-center items-baseline space-x-4">
                            {/* Add your navigation links here */}
                            <Link  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" to = '/'>Home</Link>
                            <Link to = '/aboutUs'  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">About</Link>
                            <Link  to = 'Contact' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Contact</Link>
                        </div>
                    </div>

                    <Button className='bg-slate-400 hover:bg-slate-200 hover:text-black absolute top-4 right-36' onClick={SignupNavigate}>Sign up</Button>
                    <Button className='bg-green-400 hover:bg-slate-200 hover:text-black absolute top-4 right-12' onClick={signInNavigate} >Log In</Button>
                     <CartComponent/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;