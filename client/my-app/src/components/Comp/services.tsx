import React from 'react';

const Services: React.FC = () => {
    return (
        <section className="bg-black py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-slate-300 text-[3rem] pb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div className="bg-slate-800 rounded-lg shadow-md p-6 hover:bg-slate-700 font-semibold text-center">
                        <h3 className="text-xl font-semibold mb-4 text-center text-white pb-6">Grow Your Business</h3>
                        <p className="text-gray-300">
                            We help you grow your business by providing innovative solutions and strategies tailored to your needs.
                        </p>
                    </div>
                    <div className="bg-slate-800 rounded-lg shadow-md p-6 hover:bg-slate-700 text-center text-white">
                        <h3 className="text-xl font-semibold mb-4 pb-6">Collaborate with Us</h3>
                        <p className="text-gray-300 font-semibold">
                            Collaborate with our team of experts to bring your ideas to life and achieve your business goals.
                        </p>
                    </div>
                    <div className="bg-slate-800 rounded-lg shadow-md p-6 hover:bg-slate-700 text-white">
                        <h3 className="text-xl font-semibold mb-4 text-center pb-4">Modern Day Design</h3>
                        <p className="text-gray-300 text-center font-semibold">
                            We create modern and visually appealing designs that will make your brand stand out from the competition.
                        </p>
                    </div>
                    <div className="bg-slate-800 rounded-lg shadow-md p-6 hover:bg-slate-700 text-white">
                        <h3 className="text-xl font-semibold mb-4 text-center pb-6">Boost Productivity</h3>
                        <p className="text-gray-300 text-center font-semibold">
                            Enhance your team's efficiency with our productivity tools and strategies designed to streamline your workflow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
