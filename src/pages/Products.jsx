import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = ()  => {
    return  (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
};

export default Products;