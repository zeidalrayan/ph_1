import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import useDate from "../hook/useDate";
import Loading from "../components/Loading";

const Berita = () => {
  const [berita, setberita] = useState([]);
  const [loading, setloading] = useState(true);
  const { dayName, date, monthName, year } = useDate();

  const [cberita, sberita] = useState(6);
  const [loadingbtn, setloadingbtn] = useState(false);
  const loadberita = () => {
    setloadingbtn(true);
    setTimeout(() => {
      sberita((prev) => prev + 6);
      setloadingbtn(false);
    }, 2000);
  };

  const location = useLocation();

  const { id } = useParams();

  const Navigate = useNavigate();

  const getberita = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `https://berita-indo-api-next.vercel.app/api/cnn-news/${id}`
      );

      setberita(response.data.data);
    } catch (error) {
      if (error.response.status === 400) {
        Navigate("/NotFound");
      }
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getberita();
  }, [id]);
  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className=" p-10">
          <h2 className=" capitalize text-center text-2xl font-bold ">
            Berita {location.pathname.substring(1)} {dayName}-{date}-{monthName}
            -{year}
          </h2>
          <div className=" grid grid-cols-3 my-5 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {berita.slice(0, cberita).map((news, index) => (
              <Card news={news} index={index} berita={berita} />
            ))}
          </div>
          {loadingbtn ? (
            <h2 className="w-full text-center">loading...</h2>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={loadberita}
                className="  bg-sky-500 text-white font-semibold p-3 rounded-lg  "
              >
                lihat berita lainnya
              </button>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default Berita;
