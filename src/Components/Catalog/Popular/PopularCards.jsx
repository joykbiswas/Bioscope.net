/* eslint-disable react/prop-types */
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBookmark, FaStar } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa";

const PopularCards = ({ item }) => {
  const { img, name, rating, value, type, date } = item;

  return (
    <div>
      <div className="m-4 group text-white">
        <div className="relative grid h-72 w-full  items-end justify-center overflow-hidden text-center rounded-2xl border">
          <div className=" absolute inset-0 m-0 h-full  w-full  group-hover:scale-110 transition  ">
            <img src={img} className="h-full rounded-2xl" alt="" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full hover:bg-gradient-to-t from-black via-black/50" />
          </div>

          <div className=" ">
            <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
              <p className="text-2xl text-blue-600 font-bold ">
                <FaBookmark className="hover:text-pink-500" />
              </p>
            </div>
          </div>
          <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">
            <h2 className="card-title">
              <FaStar className="text-blue-600" />
              {rating}
            </h2>
          </div>
          
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold ">{name}</h1>
          <div className="flex flex-row gap-4 ml-5">
            <h5 className=" mb-4 text-xl">{value}</h5>
            <h5 className="mb-4 text-xl">{type}</h5>
            <h5 className=" mb-4 text-xl">{date}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCards;
