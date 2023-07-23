import AboutUs from "./components/aboutUs";
import BannerForm from "./components/bannerForm";
import Categories from "./components/categories";
import CommonSection from "./components/commonSection";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Instagram from "./components/instagram";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Categories />
      <CommonSection title="Best Seller" />
      <CommonSection title="Just Sold" />
      <div>
        <figure className="my-20 object-cover h-[650px] bg-[#dddddd]">
          <img src="https://placehold.co/1920x650" alt="banner" />
        </figure>
        <figure className="my-20 object-cover h-[300px] bg-[#dddddd]">
          <img src="https://placehold.co/1920x300" alt="banner" />
        </figure>
      </div>
      <CommonSection title="Top picks for you" />
      <BannerForm />
      <Instagram />
      <Footer />
    </>
  );
}

export default App;