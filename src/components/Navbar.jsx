import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const nav = ["Home", "Company", "Resources", "About", "Contact"];

  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px]  mx-auto">
      <h1 className=" w-full sm:text-3xl font-bold text-[#5dd9dd] ml-3 text-xl">SANGFINANCE</h1>

      {/* <span className="md:hidden text-4xl">
        <BsList />
      </span> */}
      <ul className="flex hidden md:inline-flex">
        {nav.map((item) => (
          <li
            className="p-4 cursor-pointer text-xl hover:text-[#5dd9dd] transition-all"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="md:hidden text-4xl cursor-pointer ">
        {isOpenNav ? (
          <AiOutlineClose
            className="m-3 hover:rotate-45 transition-all ease-out duration-300"
            onClick={() => setIsOpenNav(false)}
          />
        ) : (
          <AiOutlineMenu
            className="m-3 hover:translate-x-1 transition-all ease-out duration-300"
            onClick={() => setIsOpenNav(true)}
          />
        )}
      </div>
      {
        <div
          className={`${isOpenNav ? "translate-x-0" : "translate-x-[-700px]"} 
         fixed top-0 left-0 bg-[#000300] border-r-2 md:border-r-0 border-r-gray-900 w-[70%] h-full md:hidden transition-all duration-500 z-10`}
        >
          <h1 className="mx-3 mt-8 w-full text-3xl font-bold text-[#5dd9dd]">
            SANGFINANCE
          </h1>
          <ul className="uppercase p-4">
            {nav.map((item) => (
              <li
                className="cursor-pointer p-4 border-b border-gray-600 hover:bg-slate-500 transition-all"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default Navbar;
