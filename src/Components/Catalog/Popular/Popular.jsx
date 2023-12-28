/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import PopularCards from "./PopularCards";
const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
      });
  }, []);

  const NextArrow = (props) => (
    <div
      {...props}
      className="custom-next-arrow absolute top-1/2 -right-6 transform -translate-y-1/2 cursor-pointer text-2xl hover:bg-slate-400 p-2 hover:rounded-full"
      //   style={{ right: '10px', zIndex: 1 ,cursor: 'pointer'}}
      onClick={props.onClick}
    >
      <FaArrowRight />
    </div>
  );

  const PrevArrow = (props) => (
    <button
      {...props}
      className="custom-prev-arrow absolute top-1/2 -left-6 transform -translate-y-1/2 cursor-pointer text-2xl hover:bg-slate-400 p-2 hover:rounded-full"
      onClick={props.onClick}
    >
      <FaArrowLeft />
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products =
    movies &&
    movies.map((item) => (
      <PopularCards key={item.id} item={item}></PopularCards>
    ));
  return (
    <div className="max-w-screen-xl mx-auto p-3">
      <h2 className="text-4xl font-bold text-white"> Popular</h2>
      <div className="gap-8 pl-4">
        <Slider {...settings} className=" m-3 ">
          {products}
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
