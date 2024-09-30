import React from "react";
import Man from "../assets/images/Man.jpg";
import Girl from "../assets/images/Girl.jpg";
import Kid from "../assets/images/Kid.jpg";
const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      ImageUrl: Man,
    },
    {
      title: "Women",
      ImageUrl: Girl,
    },
    {
      title: "Kid",
      ImageUrl: Kid,
    },
  ];
  return (
    <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((item, index) => (
        <div
          className=" relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          key={index}
        >
          <img
            src={item.ImageUrl}
            alt="Photo"
            className=" w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className=" absolute top-20 left-12">
            <p className="text-xl font-bold ">{item.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
