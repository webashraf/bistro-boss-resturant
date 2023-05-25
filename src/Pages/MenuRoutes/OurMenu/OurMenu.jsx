import CoverHeader from "../../../Shared/CoverHeader/CoverHeader";
import cover1 from "../../../assets/Cover/banner3.jpg";
import cover2 from "../../../assets/Cover/chef-service.jpg";
import DropImageBox from "../../../Shared/DropImageBox/DropImageBox";
import useMenu from "../../../hooks/useMenu";

const OurMenu = () => {
  const [menus] = useMenu();
  const desserts = menus.filter((item) => item.category === "dessert");
  const pizzas = menus.filter((item) => item.category === "pizza");
  const salads = menus.filter((item) => item.category === "salad");
  const soups = menus.filter((item) => item.category === "soup");
  const offereds = menus.filter((item) => item.category === "offered");
  console.log(offereds);
  return (
    <div>
      <CoverHeader
        img={cover1}
        heading={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></CoverHeader>
      <div className="py-10 text-center">
        <div className="grid grid-cols-2 gap-4">
          {offereds.map((item) => (
            <DropImageBox key={item._id} menu={item}></DropImageBox>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </button>
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
        <button className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </button>
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
        <button className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </button>
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
        <button className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </button>
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
        <button className="btn btn-outline border-0 border-b-4 border-b-black">
          Order Our Favourite Food
        </button>
      </div>
    </div>
  );
};

export default OurMenu;
