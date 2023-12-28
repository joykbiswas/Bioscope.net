
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import img7 from "../../assets/windmill-village-hote4.jpg";
import BannerCards from "./BannerCards";
import { useEffect, useState } from "react";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
      });
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const product = movies && movies.map((item) => (
    <BannerCards key={item.id} item={item}></BannerCards>
  ));

  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel
        showDots={true}
        responsive={responsive}
        // customTransition="all .8"
        transitionDuration={1000}
        
      >
        {product}
        
      </Carousel>
    </div>
  );
};

export default Banner;
