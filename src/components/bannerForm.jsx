import Wrapper from "./wrapper";
import img1 from '../assets/images/formbanner.jpg'

const BannerForm = () => {
  return (
    <div className="relative">
      <figure className="my-20 object-cover h-[200px] bg-[#dddddd]">
        <img src={img1} alt="bannerform" />
      </figure>
      <Wrapper customStyling="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex justify-between items-center">
        <div className="text-center lg:text-left">
          <h5 className="uppercase font-bold text-5xl">Join our mixt fam</h5>
          <p className="uppercase text-[23px]">
            an expression of unapologoetic change
          </p>
        </div>
        <form className="w-full sm:w-[500px] mt-10 lg:mt-0 mx-auto lg:mx-0">
          <input className="w-full px-8 py-4 placeholder:text-black text-2xl" type="email" placeholder="Email" />
        </form>
      </Wrapper>
    </div>
  );
};

export default BannerForm;
