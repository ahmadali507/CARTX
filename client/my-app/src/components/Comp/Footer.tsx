import React from 'react';
import { LocateFixed, Mails, Contact } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold mb-2 text-center">Technologies</h4>
                        <ul className='text-center'>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>SCSS</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold mb-2 text-center">Contact</h4>
                        <ul className='text-center flex flex-col gap-2'>
                            <li className='flex justify-center gap-4 '><Mails />Email: example@example.com</li>
                            <li className='flex justify-center gap-4'> <Contact/>Phone: 123-456-7890</li>
                            <li className='flex justify-center gap-4'><LocateFixed/>Location: City, Country</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold mb-2 text-center">Options</h4>
                        <ul className='text-center'>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h4 className="text-lg font-bold mb-2 text-center w-[80%]">Collaborate</h4>
                        <p className='text-center w-[80%]'>I AM AHMAD. Collaborate with me to build amazing web designs for your businesses. </p>
                        <div className="flex items-center mt-4">
                        </div>
                    </div>
                </div>
                            <p className="text-md text-center pt-12">&copy; 2024 Your Company Name. All rights reserved. This firm is Copyright to end,</p>
            </div>
        </footer>
    );
};

export default Footer;
