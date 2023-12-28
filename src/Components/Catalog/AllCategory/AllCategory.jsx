import { useEffect, useState } from "react";
import AllCategoryCard from "./AllCategoryCard";


const AllCategory = () => {
    const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);
    return (
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                movies.map(item=><AllCategoryCard key={item.id} item={item}></AllCategoryCard>)
            }
        </div> 
        </div>
    );
};

export default AllCategory;