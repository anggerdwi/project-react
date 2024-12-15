import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
                    <p> Balière offers premium products inspired by European elegance. From perfumes to lifestyle products, we strive for quality and sophistication.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#home" className="hover:text-white transition">Home</a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-white transition">Our Product</a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-white transition">About Us</a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-white transition">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <p>Email: support@baliere.com</p>
                    <p>Phone: +62 812-3456-7890</p>
                    <p>Address: Jl. Letjen S Parman, Bondowoso</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f text-white"></i>
                        </a>
                        <a
                            href="#"
                            className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#D13584] hover:to-[#8a3ab9] transition"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram text-white"></i>
                        </a>
                        <a
                            href="#"
                            className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter text-white"></i>
                        </a>
                        <a
                            href="#"
                            className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
                <p>&copy; 2024 Balière. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;