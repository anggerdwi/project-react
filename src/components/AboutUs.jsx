import React from "react"

const AboutUs = () => {
    return (
        <div className="flex w-full bg-white text-gray-800 pt-[72px]">
            <div className="w-full flex flex-col justify-center items-center p-14 gap-2">
                <p className="text-lg mb-4 text-center">Welcome to <br /> <span className="font-bold text-gray-800 text-5xl">Balière</span> <br /> where passion meets perfection. From our carefully curated products to our commitment to excellence, <br /> we aim to redefine what luxury means for you.</p>
                <button className="bg-gray-800 text-white py-2 px-6 hover:bg-gray-700 transition duration-300">
                    Shop In App
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
