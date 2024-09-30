import React from "react";
import { FaShippingFast, FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e,product) => {
    e.preventDefault();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added to cart");
  }
  return (
    <div className=" bg-white shadow rounded relative border transform transition-transform duration-300 hover:scale-105 py-8 px-2">
      <img
        src={product.image}
        alt={product.name}
        className=" w-full h-48  object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-gray-500"></FaStar>
      </div>
      <div 
      onClick={(e) => handleAddToCart(e, product)}
      className="absolute bottom-4 right-2 flex items-center justify-center  w-10 h-10 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300">
        <span className="group-hover:hidden">
          <FaShippingFast size={23} />
        </span>
        <span className="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCart;
