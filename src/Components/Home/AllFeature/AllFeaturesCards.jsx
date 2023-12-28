/* eslint-disable react/prop-types */

// import { BsEye } from "react-icons/bs";
import { FaBookmark, FaStar,  } from "react-icons/fa6";

const AllFeaturesCards = ({ item }) => {
  const { img, name, rating, value, type, date } = item;
  
  return (
    <div>
    <div className="m-4 group text-slate-200 hover:text-blue-400">
      <div className="relative grid h-72 w-full  items-end justify-center overflow-hidden text-center rounded-2xl ">
        <div
          className=" absolute inset-0 m-0 h-full  w-full  group-hover:scale-110 transition  "
        >
          <img src={img} className="h-full rounded-2xl" alt="" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full hover:bg-gradient-to-t from-black via-black/50" />
        </div>

        <div className=" ">
       
        <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
            <p className="text-2xl text-blue-600 font-bold "><FaBookmark className="hover:text-pink-500"/></p>
          </div>
        

        <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">

        <h2 className="card-title"><FaStar className="text-blue-600" />{rating}</h2>
        </div>
        </div>

      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold ">{name}</h1>
       
      </div>
    </div>
    <div className="flex justify-around text-white">
       <p className="text-xl"> {value}</p>
        <p className="text-xl"> {type}</p>
        <p className="text-xl"> {date}</p>
       </div>
  </div>
  );
};

export default AllFeaturesCards;
