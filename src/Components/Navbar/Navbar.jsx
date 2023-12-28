import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto text-white py-8 flex justify-between items-center">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold">Bioscope.<span className="text-blue-500">TV</span></h1>
          {/* <img src="http://flixtv.volkovdesign.com/main/img/logo.svg" alt="" /> */}
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 font-semibold">
        <div className="">
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} className="color" id="home">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 text-xl underline"
                      : "text-xl"
                  }
                >
                  Home
                </NavLink>
              </li>
            </div>

            {/* <ul
              tabIndex={0}
              className="dropdown-content z-[1] mt-8 menu p-2 shadow bg-[#151f30] rounded-box w-52"
            >
              <li className="home">
                <a>Home Style 1</a>
              </li>
              <li className="home">
                <a>Home Style 2</a>
              </li>
            </ul> */}
          </div>
        </div>

        <div className="">
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} className="color" id="catalog">
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-blue-600 text-xl underline"
                      : "text-xl"
                  }
                >
                  <a>Catalog</a>
                </NavLink>
              </li>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] mt-8 menu p-2 shadow bg-[#151f30] rounded-box w-52"
            >
              {/* <li className="home">
                <Link to="/catalog"><a>Catalog</a></Link>
              </li>
              <li className="home">
                <a>Catalog Dropdown</a>
              </li>
              <li className="home">
                <a>Catalog Style 2</a>
              </li>
              <li className="home">
                <a>Catalog Style 2</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="color">
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 text-xl underline"
                  : "text-xl"
              }
            >
              <a>Pricing plans</a>
            </NavLink>
          </li>
        </div>
        <NavLink to="/">
          <div className="color">
            LIVE
            <span className="text-red-500 text-5xl absolute -mt-7 ml-1">.</span>
          </div>
        </NavLink>
        <div className="text-2xl font-bold -mt-3 dot color">...</div>
      </div>

      <div>
        <form>
          <input
            className="outline-none text-white bg-[#151f30] shadow-sm rounded-xl py-2 px-3 w-[250px]"
            type="text"
            placeholder="I'm looking for"
          />
          <IoSearchSharp className=" search" />
        </form>
      </div>
      <NavLink to="/login">
        <div className="cursor-pointer login">
          <h1 className="flex items-center gap-x-3">
            Sign in <TbLogin className="text-[#2f80ed] text-2xl" />
          </h1>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
