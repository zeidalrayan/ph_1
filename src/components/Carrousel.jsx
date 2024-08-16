import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";

const Carrousel = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBerita = async () => {
    try {
      const response = await axios.get(
        "https://berita-indo-api-next.vercel.app/api/cnn-news"
      );
      setBerita(response.data.data.slice(0, 5)); // Limit to 5 items
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBerita();
  }, []);

  return (
    <div className="  flex justify-center h-56 sm:h-64 xl:h-80 2xl:h-96 mb-12">
      <Carousel slideInterval={5000}>
        {berita.map((item) => (
          <div
            key={item.title}
            className=" flex justify-center h-full bg-sky-700"
          >
            <a href={item.link} className=" cursor-pointer" target="_blank">
              <img
                src={item.image.large}
                alt={item.title}
                className="object-cover h-full relative z-0 "
              />
            </a>
            <h2 className="  bg-opacity-55 text-white bg-black  max-md:w-3/4  flex flex-col justify-center text-center h-full px-12 p-4 text-xl max-lg:text-lg max-md:text-base font-bold">
              {item.title} <br />
              <span className="text-xl max-xl:text-lg max-md:text-sm font-semibold mt-4">
                {new Date(item.isoDate).toLocaleDateString()}
              </span>
            </h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrousel;
