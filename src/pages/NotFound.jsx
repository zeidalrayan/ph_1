import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <h2 className=" flex justify-center items-center flex-col h-screen">
        Halaman Tidak di temukan
      </h2>
      <Link to={"/"} className="py-2 px-4 text-white bg-red-700 rounded-lg">
        ke embali ke halaman awal
      </Link>
    </>
  );
};

export default NotFound;
