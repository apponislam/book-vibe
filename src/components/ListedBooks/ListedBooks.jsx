import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../index.css";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className="bg-[#1313130D] rounded-3xl p-9 mb-8">
                <h1 className="worksans font-bold text-[28px] text-center">Books</h1>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <h1>Read Books</h1>
                </TabPanel>
                <TabPanel>
                    <h1>Wishlist Books</h1>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
