import Header from "../components/Header";

import Card from "../components/Card";
import useDate from "../hook/useDate";
import useBeritz from "../hook/useBeritz";
import Loading from "../components/Loading";
import { useState } from "react";
import Carrousel from "../components/Carrousel";

const Home = () => {
  const { dayName, date, monthName, year } = useDate();
  const { berita, loading } = useBeritz();
  const [cberita, sberita] = useState(6);
  const [loadingbtn, setloadingbtn] = useState(false);
  const loadberita = () => {
    setloadingbtn(true);
    setTimeout(() => {
      sberita((prev) => prev + 6);
      setloadingbtn(false);
    }, 2000);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className=" p-10">
          <h2 className=" text-center font-bold text-3xl mb-8">
            Berita hari ini {dayName}-{date}-{monthName}-{year}
          </h2>
          <Carrousel />
          <h2 className=" text-center text-2xl font-bold ">
            Berita paling baru
          </h2>
          <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 my-5 gap-5">
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

export default Home;
