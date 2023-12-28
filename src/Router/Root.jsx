import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-gradient-to-t from-[#4c173d] via-[#3d5277] to-[#020b1b] ">
            
           
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;