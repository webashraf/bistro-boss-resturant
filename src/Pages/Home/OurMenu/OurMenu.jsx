import React, { useEffect, useState } from "react";
import DropImageBox from "../../../Shared/DropImageBox/DropImageBox";

const OurMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenus(popularItems);
      });
  }, []);
  console.log(menus);
  return (
    <div className="py-10">
      <div className="grid grid-cols-2 gap-4 space-x-6">
        {menus.map((menu) => (
          <DropImageBox key={menu._id} menu={menu}></DropImageBox>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
