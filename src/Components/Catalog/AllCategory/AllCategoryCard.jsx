/* eslint-disable react/prop-types */

const AllCategoryCard = ({ item }) => {
  const { img, name, } = item;

  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div className="m-4 group ">
        <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
          <div
            style={cardStyle}
            className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition "
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </div>

          <div className="relative flex gap-4 ">
            <h2 className=" bottom-0 left-0 group-hover:text-blue-500 text-white mb-6 font-medium leading-[1.5] text-2xl">
              {name}
            </h2>
            <p className="bottom-0 left-0 bg-slate-600 p-1 rounded-xl text-white mb-6  leading-[1.5] text-2xl">
                312
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoryCard;
