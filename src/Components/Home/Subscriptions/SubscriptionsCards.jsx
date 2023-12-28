/* eslint-disable react/prop-types */
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBookmark } from "react-icons/fa6";
// import { FaArrowLeft } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

const SubscriptionsCards = ({ item }) => {
  const { img, name, title } = item;

  // const NextArrow = (props) => (
  //   <div
  //     {...props}
  //     className="custom-next-arrow absolute top-1/2 -right-8 transform -translate-y-1/2 cursor-pointer"
  //     //   style={{ right: '10px', zIndex: 1 ,cursor: 'pointer'}}
  //     onClick={props.onClick}
  //   >
  //     <FaArrowRight />
  //   </div>
  // );

  // const PrevArrow = (props) => (
  //   <button
  //     {...props}
  //     className="custom-prev-arrow absolute top-1/2 -left-8 transform -translate-y-1/2 cursor-pointer"
  //     onClick={props.onClick}
  //   >
  //     <FaArrowLeft />
  //   </button>
  // );

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  // };

  return (
    <div>
      <div className="m-4 group ">
        <div className="relative grid h-72 w-full  items-end justify-center overflow-hidden text-center rounded-2xl border">
          <div
            className=" absolute inset-0 m-0 h-full  w-full  group-hover:scale-110 transition  "
          >
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
          <div className="group-hover:flex hidden absolute top-1/2  left-1/2 justify-between mt-4 text-5xl text-white ">
            <p><BsEye /></p>
          </div>

        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white ">{name}</h1>
          <p className="text-xl text-slate-400"> {title}</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsCards;
