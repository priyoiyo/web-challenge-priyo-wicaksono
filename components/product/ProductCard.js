import React from "react";
import {BsCartFill} from 'react-icons/bs'

const ProductCard = (props) => {
const data = props.data

  return (


    <div className="relative sm:w-5/12 md:w-3/12 xs:w-full bg-white shadow-md rounded-3xl p-2 mx-4 my-1  cursor-pointer">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-32 rounded-2xl w-full object-cover" src={data.images[0]}/>
        <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">

        </p>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">{data.title}</p>
          <p className="text-md text-gray-800 mt-0">${` ` + `${data.price}`}</p>
        </div>
        <button className="bg-purple-700 hover:bg-purple-900
         text-white h-8 text-xs font-bold py-1 px-4 rounded-3xl">Buy</button>
      </div>

    </div>

  );
};

export default ProductCard