import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

// setState / useEffect

const ProductComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // ambil data dari API
        axios.get('http://localhost:5000/api/products')
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
    },[]);

    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 shadow-md">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-40 w-72 object-cover rounded"
                    />
                    <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                    <p className="text-grey-500">{product.description}</p>
                    <p className="text-green-500 font-semibold">{product.price}</p>
                    <button className="flex items-center justify-center gap-2 text-gray-800 py-2 onclick={() => alert('Shop Now: ${product.name})}">
                        <AiOutlineShoppingCart size={20}/>
                        <span>Shop Now</span>
                    </button>
                </div>
            ))}
        </div>
    );
};


export default ProductComponent;