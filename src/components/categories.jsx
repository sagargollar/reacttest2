import { useState, useEffect } from "react";
import Wrapper from "./wrapper";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc&limit=4")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="my-20">
      <Wrapper>
        <h3 className="text-3xl uppercase font-bold text-center">Categories</h3>
        <ul className="lg:grid grid-cols-10 gap-10 lg:h-[70vh] grid-rows-6 py-10 lg:max-h-[700px] space-y-10 lg:space-y-0">
          <li className="lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:row-span-6 overflow-hidden relative flex items-center justify-center aspect-video lg:aspect-auto">
            <a href="#FIXME" title="Jeans" target="_self">
              <figure>
                <img
                  src={categories?.[0]?.image}
                  alt={categories?.[0]?.category}
                />
                <figcaption className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-3xl text-white">
                  Jeans
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="lg:col-start-4 lg:row-start-1 lg:col-span-4 lg:row-span-3 overflow-hidden relative flex items-center justify-center aspect-video lg:aspect-auto">
            <a href="#FIXME" title="Shorts" target="_self">
              <figure>
                <img
                  src={categories?.[1]?.image}
                  alt={categories?.[1]?.category}
                />
                <figcaption className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-3xl text-white">
                  Shorts
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="lg:col-start-4 lg:row-start-4 lg:col-span-4 lg:row-span-3 overflow-hidden relative flex items-center justify-center aspect-video lg:aspect-auto">
            <a href="#FIXME" title="Dresses" target="_self">
              <figure>
                <img
                  src={categories?.[2]?.image}
                  alt={categories?.[2]?.category}
                />
                <figcaption className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-3xl text-white">
                  Dresses
                </figcaption>
              </figure>
            </a>
          </li>
          <li className="lg:col-start-8 lg:row-start-1 lg:col-span-3 lg:row-span-6 overflow-hidden relative flex items-center justify-center aspect-video lg:aspect-auto">
            <a href="#FIXME" title="Skirts" target="_self">
              <figure>
                <img
                  src={categories?.[3]?.image}
                  alt={categories?.[3]?.category}
                />
                <figcaption className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-3xl text-white">
                  Skirts
                </figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Categories;
