import { useEffect, useState } from "react";
import AllFeaturesCards from "./AllFeaturesCards";


const AllFeatures = () => {
    const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
      });
  }, []);

    return (
        <div className="max-w-screen-xl mx-auto p-3">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-7">
              {
                movies && movies.map((item)=><AllFeaturesCards key={item.id} item={item}></AllFeaturesCards>)
              }
            </div>
        </div>
    );
};

export default AllFeatures;