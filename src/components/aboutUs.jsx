import Wrapper from "./wrapper";

const AboutUs = () => {
  return (
    <section className="my-20">
      <Wrapper customStyling="w-8/12 lg:w-1/2 text-center">
        <h2 className="text-3xl uppercase font-bold">About Us</h2>
        <p className="py-10 text-gray-700 text-lg">
          Being inclusive fluid are crucial to the fabric of our society. Just
          sayng it doesn't cut it anymore, it needs to be incoporated into every
          stitch, fold, colour and style. We don't aim to define your expressio,
          rather help you find it and make it your own.
        </p>
      </Wrapper>
    </section>
  );
};

export default AboutUs;
