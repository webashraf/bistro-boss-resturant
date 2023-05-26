import CoverHeader from "../../../Shared/CoverHeader/CoverHeader";
import cover1 from "../../../assets/Cover/banner3.jpg";
import cover2 from "../../../assets/Cover/chef-service.jpg";
import DropImageBox from "../../../Shared/DropImageBox/DropImageBox";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [menus] = useMenu();
  const desserts = menus.filter((item) => item.category === "dessert");
  const pizzas = menus.filter((item) => item.category === "pizza");
  const salads = menus.filter((item) => item.category === "salad");
  const soups = menus.filter((item) => item.category === "soup");
  const offers = menus.filter((item) => item.category === "offered");
  console.log(offers);
  return (
    <div>
      <CoverHeader
        img={cover1}
        heading={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></CoverHeader>
      <div className="py-10 text-center">
        <div className="grid grid-cols-2 gap-4">
          {offers.map((item) => (
            <DropImageBox key={item._id} menu={item}></DropImageBox>
          ))}
        </div>
        <Link to={`/ourshop/offers`} className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </Link>
      </div>

      <CoverHeader
        img={cover2}
        heading={"Desserts"}
        description={"Would you like to try a dish?"}
      ></CoverHeader>
      <div className="py-10 text-center">
        <div className="grid grid-cols-2 gap-4">
          {desserts.map((item) => (
            <DropImageBox key={item._id} menu={item}></DropImageBox>
          ))}
        </div>
        <Link to={`/ourshop/desserts`} className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </Link>
      </div>

      <CoverHeader
        img={cover2}
        heading={"Pizza"}
        description={"Would you like to try a dish?"}
      ></CoverHeader>
      <div className="py-10 text-center">
        <div className="grid grid-cols-2 gap-4">
          {pizzas.map((item) => (
            <DropImageBox key={item._id} menu={item}></DropImageBox>
          ))}
        </div>
        <Link to={`/ourshop/pizzas`} className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </Link>
      </div>

      <CoverHeader
        img={cover2}
        heading={"Salad"}
        description={"Would you like to try a dish?"}
      ></CoverHeader>
      <div className="py-10 text-center">
        <div className="grid grid-cols-2 gap-4">
          {salads.map((item) => (
            <DropImageBox key={item._id} menu={item}></DropImageBox>
          ))}
        </div>
        <Link to={`/ourshop/salads`} className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </Link>
      </div>

      <CoverHeader
        img={cover2}
        heading={"Soups"}
        description={"Would you like to try a dish?"}
      ></CoverHeader>
      <div className="py-10 text-center">
        <div className="grid grid-cols-2 gap-4">
          {soups.map((item) => (
            <DropImageBox key={item._id} menu={item}></DropImageBox>
          ))}
        </div>
        <Link to={`/ourshop/soups`} className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </Link>
      </div>
    </div>
  );
};

export default OurMenu;
