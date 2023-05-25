import { useState } from 'react';
import CoverHeader from '../../../Shared/CoverHeader/CoverHeader';
import cover from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default OurShop;