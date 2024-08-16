import React from "react";

const Internasional = () => {
  const [berita, setberita] = useState([]);
  const getberita = async () => {
    const response = await axios.get(
      "https://berita-indo-api-next.vercel.app/api/cnn-news"
    );

    setberita(response.data.data);
  };
  useEffect(() => {
    getberita();
  }, []);
  return (
    <>
      <div
        key={index}
        className=" shadow-2xl gap-4 flex flex-col place-items-center py-4 px-7 rounded-lg p-1"
      >
        <img src={news.image.small} alt={news.title} className=" rounded-xl" />
        <span>{new Date(news.isoDate).toLocaleDateString()}</span>
        <h2 className=" font-bold text-xl">{news.title}</h2>
        <p>{news.contentSnippet}</p>
        <div className="  flex flex-col justify-end w-1/2 h-full">
          <a
            href={news.link}
            className="bg-blue-600  text-white justify-center flex py-2 px-4 rounded-lg"
          >
            Klik
          </a>
        </div>
      </div>
    </>
  );
};

export default Internasional;
