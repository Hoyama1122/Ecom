import { Categories, mockData } from "../assets/mockData";
import Hero from "../assets/images/Hero2.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCart from "../components/ProductCart";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className=" w-full md:w-3/12">
            <div className="bg-red-600 text-sm text-white px-4 py-2.5">
              SHOP BY CATERGORIES
            </div>

            <ul className="space-y-4 bg-gray-100 p-3 border ">
              {Categories.map((catergory, idex) => (
                <li
                  key={idex}
                  className="flex items-center text-sm font-medium "
                >
                  <div className="h-2 w-2 border border-red-500 rounded-full mr-2">
                    {" "}
                  </div>
                  <p
                    className="hover:text-red-500 cursor-pointer hover:text-base duration-300
                  "
                  >
                    {catergory}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* Hero section */}
          <div className=" w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={Hero} alt="Hero" className="w-full h-full"/>
            <div className=" absolute top-16 left-8 text-white">
              <p className=" mb-4">Code With Yousaf</p>
              <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
              <p className="text-xl mt-2.5 font-bold ">Make your life easy</p>
              <button className="bg-red-600 text-white px-4 py-1.5 mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </>
  );
};

export default Home;
