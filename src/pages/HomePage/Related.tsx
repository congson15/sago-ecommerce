import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProductCard } from '../ProductPage/components/ProductCard';
import { data } from '../ProductPage/data';
import './css/Related.css';
export interface RelatedProductProps {
}


export function RelatedProduct(props: RelatedProductProps) {
    return (
        <div className="mt-20 max-w-screen-xl mx-auto">
            <h2 className="font-bold text-3xl ml-4 my-5 text-my-color uppercase tracking-wider">Featured Products</h2>
            <Tabs>
                <TabList className="flex md:justify-end">
                    <Tab>ALL</Tab>
                    <Tab>SALE</Tab>
                    <Tab>BEST</Tab>
                    <Tab>NEW</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 md:gap-x-5">
                        {data.map(item => <ProductCard product={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 md:gap-x-5">
                        {data.map(item => <ProductCard product={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 md:gap-x-5">
                        {data.map(item => <ProductCard product={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 md:gap-x-5">
                        {data.map(item => <ProductCard product={item} />)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}
