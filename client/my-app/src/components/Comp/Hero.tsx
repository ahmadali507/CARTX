import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

type HeroProps = {
    title: string;
    description: string;
};

const Hero: React.FC<HeroProps> = ({ title, description }) => {
    return (
        <section className="bg-black text-white py-20 border-b-2 border-b-slate-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-slate-300 md:text-6xl font-bold mb-6 text-center">
                        {title}
                    </h1>
                    <h3 className="text-center font-semibold text-pretty text-indigo-200 w-[70vw] py-10">
                        {description}
                    </h3>
                    <p className="text-lg md:text-xl text-center mb-10">
                        <Typewriter
                            words={['Discover the best deals on your favourite products']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>
                    <a
                        href="/products"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
