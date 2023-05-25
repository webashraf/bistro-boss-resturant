import { useState } from 'react';
import CoverHeader from '../../../Shared/CoverHeader/CoverHeader';
import cover from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../../../Shared/MenuCard/MenuCard';

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();
    const desserts = menus.filter((item) => item.category === "dessert");
    const pizzas = menus.filter((item) => item.category === "pizza");
    const salads = menus.filter((item) => item.category === "salad");
    const soups = menus.filter((item) => item.category === "soup");
    const drinks = menus.filter((item) => item.category === "drinks");

    return (
        <>
            <CoverHeader heading={"OUR SHOP"} description={"Whould you like to try a dish?"} img={cover}></CoverHeader>

            <div className='py-10'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-3 space-y-3 gap-4">
                            {pizzas.map((menu) => (
                                <MenuCard key={menu._id} menu={menu}></MenuCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 space-y-3 gap-4">
                            {salads.map((menu) => (
                                <MenuCard key={menu._id} menu={menu}></MenuCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 space-y-3 gap-4">
                            {soups.map((menu) => (
                                <MenuCard key={menu._id} menu={menu}></MenuCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 space-y-3 gap-4">
                            {desserts.map((menu) => (
                                <MenuCard key={menu._id} menu={menu}></MenuCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 space-y-3 gap-4">
                            {drinks.map((menu) => (
                                <MenuCard key={menu._id} menu={menu}></MenuCard>
                            ))}
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </>
    );
};

export default OurShop;