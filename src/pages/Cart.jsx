import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cartempty from "../assets/images/OIP.jfif";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setaddress] = useState("main stret, 0012");
  const [isModalOpen, setisModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="conatiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 mt-4">
      {cart.products.length > 0 ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              {/* header */}
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {/* render products */}
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt=""
                        className="h-16 w-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <p className="text-lg font-semibold">{product.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-12">
                      <p className="font-semibold">${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button 
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        className="text-xl font-bold px-1.5 border-r">
                          -
                        </button>
                        <p className="text-xl px-1 border-l">
                          {product.quantity}
                        </p>
                        <button 
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        className="text-xl px-1 border-l">+</button>
                      </div>
                      <p className="font-semibold">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl  font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-lg">Total Items:</span>
                <span className="text-xl font-semibold">
                  {cart.totalQuantity}
                </span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to <span className="font-semibold">{address}</span>
                </p>

                <button
                  onClick={() => setisModalOpen(true)}
                  className="text-blue-500 hover:text-blue-700 underline mt-1 ml-2"
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span className="text-xl font-semibold">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>
              <button 
              onClick={()=>navigate("/checkout")}
              className="w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                Proced to Checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}>
            <ChangeAddress
              setisModalOpen={setisModalOpen}
              setaddress={setaddress}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center  mb-4">
          <div>
            <img src={Cartempty} alt="empty cart" className="h-96 block" />
          </div>
          <div>
            <p className="text-3xl font-semibold mt-4 text-red-500">
              Add products to cart!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
