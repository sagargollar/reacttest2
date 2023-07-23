import { useState, useEffect } from "react";
import Wrapper from "./wrapper";
import Card from "./card";

const CommonSection = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc&limit=4")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="my-20">
      <Wrapper>
        <h4 className="text-3xl font-bold text-center uppercase">{title}</h4>
        {Array.isArray(data) && data.length > 0 && (
          <ul className="sm:flex justify-between items-center flex-wrap py-10 space-y-10 sm:space-y-0">
            {data.map((item) => (
              <Card
                key={item?.id}
                title={item?.title}
                price={item?.price}
                src={item?.image}
              />
            ))}
          </ul>
        )}
      </Wrapper>
    </section>
  );
};

export default CommonSection;