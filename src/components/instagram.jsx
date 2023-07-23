import { useState, useEffect } from "react";
import { IoCopySharp } from "react-icons/io5";

const Instagram = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="mt-20 mb-10">
      <h6 className="text-3xl font-bold text-center uppercase">
        Shop from instagram
      </h6>
      {Array.isArray(data) && data.length > 0 && (
        <ul className="flex justify-between items-center flex-wrap py-10">
          {data.map((item, index) => (
            <li className="bg-gray-100 basis-full relative sm:basis-[calc(50%_-_10px)] lg:basis-[calc(25%_-_10px)] mb-[10px] aspect-square overflow-hidden">
              <figure className="flex justify-center items-center">
                <img src={item?.image} alt={item?.title} />
              </figure>
              {(index + 1) % 2 === 0 ? null : (
                <IoCopySharp className="text-3xl rotate-180 absolute top-5 right-5" />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Instagram;
