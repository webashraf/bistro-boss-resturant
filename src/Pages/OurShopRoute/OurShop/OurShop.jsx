import { useState } from 'react';
import CoverHeader from '../../../Shared/CoverHeader/CoverHeader';
import cover from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../../../Shared/MenuCard/MenuCard';
import OrderTab from '../OrderTab/OrderTab';

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
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>


                </Tabs>
            </div>
        </>
    );
};

export default OurShop;