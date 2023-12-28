/* eslint-disable react/prop-types */
// import { CardBody } from "@material-tailwind/react";
// import { Avatar, Card, CardHeader, Typography } from "@mui/material";
import {  FaBookmark, FaStar } from "react-icons/fa6";

const BannerCards = ({ item }) => {
  // console.log(item);
  const { img, name, rating, value, type, date } = item;

  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="m-4 group">
      <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
      <div style={cardStyle}
        className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition "
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </div>

      <div className=" ">
        <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
            <p className="text-2xl text-blue-600 font-bold "><FaBookmark className="hover:text-pink-500"/></p>
          </div>
        </div>

        <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">

        <h2 className="card-title"><FaStar className="text-blue-600" />{rating}</h2>
        </div>

      <div className=" relative ">
        <h2 className=" bottom-0 left-0 group-hover:text-blue-500 text-white mb-6 font-medium leading-[1.5] text-3xl">
          {name}
        </h2>
       <div className="flex flex-row gap-8 ml-5">
       <h5 className="text-gray-400 mb-4 text-xl">{value}</h5>
        <h5 className="text-gray-400 mb-4 text-xl">{type}</h5>
        <h5 className="text-gray-400 mb-4 text-xl">{date}</h5>
       </div>
        
      </div>
    </div>
    </div>
  );
};

export default BannerCards;

/*
<div className="w-96 h-96">
      <div className="card bg-base-100 shadow-xl image-full group overflow-hidden relative">
        <figure className="border-2 border-red-800">
          <img className=" w-full h-40  object-cover" src={img} alt="Shoes" />
        </figure>

       
        <div className="card-body w-full h-full text-white border-2 border-red-800">
          <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex flex-row justify-between items-center pb-8">
            <p className="text-2xl text-blue-500 font-bold "><FaBookmark /></p>
            <h2 className="card-title"><FaStar className="text-blue-500" />{rating}</h2>
          </div>
          
          <div className="card-actions pt-14 ">
            <div>
              <h3 className="text-3xl font-bold group-hover:text-blue-500">{name}</h3>
            </div>
          </div>

          <div className="card-actions   text-xl  gap-8">
            <h3>{value}</h3>
            <h3>{type}</h3>
            <h3>{date}</h3>
          </div>
        </div>
       
      </div>
    </div>
*/
