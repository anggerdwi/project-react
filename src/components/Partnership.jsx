import React from "react";

import otsuka from '../assets/images/otsuka.png';
import linkedin from '../assets/images/linkedin.png';
import mayora from '../assets/images/mayora.png';
import j99xar from '../assets/images/j99xar.png';

const Partnership = () => {
    return(
        <div className="bg-white py-12 mb-14">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-medium text-gray-800 mb-8">Our Trusted Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                {/* Logo Mitra */}
                <div className="partner-logo">
                        <img src={otsuka} alt="Partner 1" className="h-16 object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110" />
                    </div>
                    <div className="partner-logo">
                        <img src={linkedin} alt="Partner 2" className="h-16 object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110" />
                    </div>
                    <div className="partner-logo">
                        <img src={mayora} alt="Partner 3" className="h-16 object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110" />
                    </div>
                    <div className="partner-logo">
                        <img src={j99xar} alt="Partner 4" className="h-16 object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110" />
                    </div>
        </div>
    </div>
  </div>
    );
};

export default Partnership;