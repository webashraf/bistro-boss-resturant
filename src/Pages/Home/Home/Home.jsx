import { Helmet } from "react-helmet";
import Banner2 from "../Banner/Banner2";
import BistroCover from "../BistroCover/BistroCover";
import OrderOnlineSwiper from "../OrderOnlineSwiper/OrderOnlineSwiper";
import OurMenu from "../OurMenuHome/OurMenu";
import OurMenu2 from "../OurMenuHome/OurMenu2";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BISTRO BOSS | Home</title>
      </Helmet>
      <Banner2></Banner2>
      <OrderOnlineSwiper></OrderOnlineSwiper>
      <BistroCover></BistroCover>
      <OurMenu></OurMenu>
      <OurMenu2></OurMenu2>
    </div>
  );
};

export default Home;
