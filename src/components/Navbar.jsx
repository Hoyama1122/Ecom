import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const cartQuantity = cartProducts.reduce((total, product) => total + product.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              className="w-full border px-4 py-2 rounded-full"
              type="text"
              placeholder="Search Product"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500 cursor-pointer" size={20} />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-3xl" />
            {cartQuantity > 0 && (
              <span className="absolute -top-3 -right-2 text-xs w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </Link>
          <button className="hidden md:block bg-lime-400 px-4 py-2 rounded-full shadow-md hover:bg-lime-500 transition-all duration-300 hover:scale-105">
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
