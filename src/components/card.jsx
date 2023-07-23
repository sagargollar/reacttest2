const Card = ({ src, title, price }) => {
  return (
    <li className="sm:basis-5/12 lg:basis-1/5">
      <a href="#FIXME" title={title} target="_self">
        <figure className="w-full h-96 overflow-hidden">
          <img src={src} alt={title} />
        </figure>
        <span className="mt-5 text-lg font-semibold block text-ellipsis overflow-hidden sm:max-w-[300px] whitespace-nowrap">
          {title}
        </span>
        <span className="block truncate w-full">Price {price}</span>
      </a>
    </li>
  );
};

export default Card;
