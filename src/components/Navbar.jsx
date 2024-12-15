import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > lastScrollY) {
            // Scroll Down
            setScrollingDown(true);
          } else {
            // Scroll Up
            setScrollingDown(false);
          }
          setLastScrollY(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, [lastScrollY]);

    return (
        <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          scrollingDown ? "-translate-y-full" : "translate-y-0"
        } z-50`}
      >
            <div className="container mx-auto flex justify-start items-center py-4 px-6">
                <a href="/" className="text-2xl font-bold text-gray-800">Baliére</a>
                <div className="flex justify-center flex-grow space-x-6">
                    <ul className="flex items-center space-x-6 text-gray-600">
                        <li>
                            <a href="#home" className="hover:text-gray-800">
                                Home
                            </a>
                        </li>
                        <li className="relative group">
                            <button className=" hover:text-gray-600">
                                Our Products
                            </button>
                            <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white text-black w-[80vw] p-14 grid grid-cols-4 gap-4 shadow-lg rounded-lg transform scale-y-0 group-hover:scale-y-100 transition-all duration-200 ease-out origin-top z-50">
                                <div className="">
                                    <h4 className="font-bold mb-2">Perfume</h4>
                                    <ul>
                                        <li>
                                            <a href="#" className="block hover:text-gray-800">All Clothing</a>
                                            <a href="#" className="block hover:text-gray-800">Performance Essentials</a>
                                            <a href="#" className="block hover:text-gray-800">Top & T-shirts</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">T-Shirt</h4>
                                    <ul>
                                        <li>
                                            <a href="#" className="block hover:text-gray-800">All Clothing</a>
                                            <a href="#" className="block hover:text-gray-800">Performance Essentials</a>
                                            <a href="#" className="block hover:text-gray-800">Top & T-shirts</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Shoes</h4>
                                    <ul>
                                        <li>
                                            <a href="#" className="block hover:text-gray-800">All Clothing</a>
                                            <a href="#" className="block hover:text-gray-800">Performance Essentials</a>
                                            <a href="#" className="block hover:text-gray-800">Top & T-shirts</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">hoodie</h4>
                                    <ul>
                                        <li>
                                            <a href="#" className="block hover:text-gray-800">All Clothing</a>
                                            <a href="#" className="block hover:text-gray-800">Performance Essentials</a>
                                            <a href="#" className="block hover:text-gray-800">Top & T-shirts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-800">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-800">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex shrink-0 ml-auto">
                    <button className=" bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                        Join Us
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;