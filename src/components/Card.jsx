import { Button } from "@nextui-org/react";
import React from "react";
import ModalComponents from "./Modal";

const Card = ({ news, index }) => {
  return (
    <>
      <div
        key={index}
        className=" shadow-2xl gap-4 flex flex-col place-items-center py-4 px-7 rounded-lg p-1"
      >
        <img src={news.image.small} alt={news.title} className=" rounded-xl" />
        <span>{new Date(news.isoDate).toLocaleDateString()}</span>
        <h2 className=" font-bold text-xl max-lg:text-lg">{news.title}</h2>
        <p className=" max-lg:text-sm max-lg:mb-4">{news.contentSnippet}</p>
        <div className="  flex flex-col justify-end w-1/2 h-full ">
          {/* <a
            href={news.link}
            className="bg-blue-600  text-white justify-center flex py-2 px-4 rounded-lg"
          >
            Klik
          </a> */}
          <ModalComponents news={news} />
        </div>
      </div>
    </>
  );
};

export default Card;
