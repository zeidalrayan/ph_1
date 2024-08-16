import axios from "axios";
import React, { useEffect, useState } from "react";

const useBeritz = () => {
  const [berita, setberita] = useState([]);
  const [loading, setloading] = useState(true);

  const getberita = async () => {
    try {
      const response = await axios.get(
        "https://berita-indo-api-next.vercel.app/api/cnn-news"
      );

      setberita(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getberita();
  }, []);
  return { berita, loading };
};

export default useBeritz;
