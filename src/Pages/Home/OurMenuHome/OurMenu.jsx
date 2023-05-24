import DropImageBox from "../../../Shared/DropImageBox/DropImageBox";
import HeadingTitle from "../../../Shared/HeadingTitle/HeadingTitle";
import useMenu from "../../../hooks/useMenu";

const OurMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");

  return (
    <div className="py-10">
      <HeadingTitle subTitle={"Check it out"} title={"FROM OUR MENU"}></HeadingTitle>
      <div className="grid grid-cols-2 gap-4">
        {popular.map((menu) => (
          <DropImageBox key={menu._id} menu={menu}></DropImageBox>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
