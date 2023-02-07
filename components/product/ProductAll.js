import React from "react";
// import { items } from "../CartItems";
import ProductCard from "./ProductCard";
// import ShoppingItems from "./ShoppingItems";


const items = [
    {
      id: 1,
      image: "item1",
      name: "Ceramic Table Vase",
      price: 79.99,
    },
    {
      id: 2,
      image: "item1",
      name: "Scissor",
      price: 4.3,
    },
    {
      id: 3,
      image: "item1",
      name: "Bookends",
      price: 15,
    },
    {
      id: 4,
      image: "item1",
      name: "Wall Clock",
      price: 58.33,
    },
    {
      id: 5,
      image: "item1",
      name: "Beoit 17",
      price: 12.55,
    },
    {
      id: 6,
      image: "item1",
      name: "Aumeo Audio",
      price: 368.66,
    },
    {
      id: 7,
      image: "item1",
      name: "Bottle Humidifier",
      price: 15,
    },
    {
      id: 8,
      image: "item1",
      name: "Grey Watch",
      price: 77.99,
    },
    {
      id: 9,
      image: "item1",
      name: "Kettle Teapot",
      price: 25,
    },
  ];

  
  const ProductAll = () => {
    return (
      <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        <ProductCard/>
      </div>
    );
  };
  
  export default ProductAll;