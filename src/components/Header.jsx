import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between z-40 items-center gap-8 bg-red-400 h-24  mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold mx-12 text-white tracking-widest">
        Channews
      </h1>
      <ul className="flex gap-5 px-4 w-full max-md:hidden">
        <Link
          to={"/"}
          className={location.pathname === "/" ? " text-white" : ""}
        >
          Home
        </Link>
        <Link
          to={"/internasional"}
          className={
            location.pathname === "/internasional" ? " text-white" : ""
          }
        >
          Internasional
        </Link>
        <Link
          to={"/nasional"}
          className={location.pathname === "/nasional" ? " text-white" : ""}
        >
          Nasional
        </Link>
        <Link
          to={"/olahraga"}
          className={location.pathname === "/olahraga" ? " text-white" : ""}
        >
          Sport
        </Link>
        <Link
          to={"/teknologi"}
          className={location.pathname === "/teknologi" ? " text-white" : ""}
        >
          Teknologi
        </Link>
        <Link
          to={"/hiburan"}
          className={location.pathname === "/hiburan" ? " text-white" : ""}
        >
          hiburan
        </Link>
        <Link
          to={"/gaya-hidup"}
          className={location.pathname === "/gaya-hidup" ? " text-white" : ""}
        >
          gaya-hidup
        </Link>
      </ul>

      <div
        onClick={handleNav}
        className=" justify-end flex w-full md:hidden cursor-pointer"
      >
        {nav ? (
          <AiOutlineClose size={20} color="white" />
        ) : (
          <AiOutlineMenu size={20} color="white" />
        )}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full flex flex-col z-40  justify-center gap-4 place-items-center   border-r-gray-900 bg-blue-500 "
            : " fixed left-[-100%] h-full "
        }
      >
        <h1 className="w-full text-3xl font-bold mx-12 text-white  text-center  mb-8 tracking-widest">
          Channews
        </h1>
        <Link
          to={"/"}
          className={
            location.pathname === "/"
              ? " text-white bg-cyan-500 px-4 py-2 rounded-lg"
              : "border-b-2 border-black w-full text-center pb-4"
          }
        >
          Home
        </Link>
        <Link
          to={"/internasional"}
          className={
            location.pathname === "/internasional"
              ? " text-white bg-cyan-500 px-4 py-2 rounded-lg"
              : " border-b-2 border-black w-full text-center pb-4 "
          }
        >
          Internasional
        </Link>
        <Link
          to={"/nasional"}
          className={
            location.pathname === "/nasional"
              ? " text-white bg-cyan-500 px-4 py-2 rounded-lg "
              : "border-b-2 border-black w-full text-center pb-4"
          }
        >
          Nasional
        </Link>
        <Link
          to={"/olahraga"}
          className={
            location.pathname === "/olahraga"
              ? " text-white"
              : "border-b-2 border-black w-full text-center pb-4"
          }
        >
          Olahraga
        </Link>
        <Link
          to={"/teknologi"}
          className={
            location.pathname === "/teknologi"
              ? " text-white"
              : "border-b-2 border-black w-full text-center pb-4"
          }
        >
          Teknologi
        </Link>
        <Link
          to={"/hiburan"}
          className={
            location.pathname === "/hiburan"
              ? " text-white"
              : "border-b-2 border-black w-full text-center pb-4"
          }
        >
          hiburan
        </Link>
        <Link
          to={"/gaya-hidup"}
          className={
            location.pathname === "/gaya-hidup"
              ? " text-white"
              : "border-b-2 border-black w-full text-center pb-4"
          }
        >
          gaya-hidup
        </Link>
      </ul>
    </div>
  );
};

export default Header;
