import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { OrderTable } from './components/OrderTable';

export interface OrderListProps {
}

export function OrderList(props: OrderListProps) {

    return (

        <div className="sm:px-6 w-full">
            <Tabs>
                <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <div className="sm:flex items-center justify-between">
                        <TabList className="flex md:justify-center">
                            <Tab>ALL</Tab>
                            <Tab>SALE</Tab>
                            <Tab>BEST</Tab>
                            <Tab>NEW</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <OrderTable />
                    </TabPanel>
                </div>
            </Tabs>
        </div>


    );
}
