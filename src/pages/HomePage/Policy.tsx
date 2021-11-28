import * as React from 'react';

export function Policy() {

    return (
        <div className="mt-20 max-w-screen-xl mx-auto">
            <div className="flex flex-wrap">
                <div className="md:w-3/6">
                    <h2 className="text-5xl tracking-wider text-my-color break-words font-medium">Stay at Home, We Make it Done for you.
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-10 md:gap-x-5 gap-y-3">
                <div className="p-7 border rounded-md flex flex-col justify-center text-center">
                    <h1 className="text-4xl text-purple-400 font-semibold">01</h1>
                    <h2 className="text-lg font-bold text-my-color tracking-wide my-3 uppercase">Contact for Order</h2>
                    <p className="text-gray-400 leading-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="p-7 border rounded-md flex flex-col justify-center text-center">
                    <h1 className="text-4xl text-purple-400 font-semibold">02</h1>
                    <h2 className="text-lg font-bold text-my-color tracking-wide my-3 uppercase">Pick Up Order</h2>
                    <p className="text-gray-400 leading-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="p-7 border rounded-md flex flex-col justify-center text-center">
                    <h1 className="text-4xl text-purple-400 font-semibold">03</h1>
                    <h2 className="text-lg font-bold text-my-color tracking-wide my-3 uppercase">Clean Your Shoes</h2>
                    <p className="text-gray-400 leading-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="p-7 border rounded-md flex flex-col justify-center text-center">
                    <h1 className="text-4xl text-purple-400 font-semibold">04</h1>
                    <h2 className="text-lg font-bold text-my-color tracking-wide my-3 uppercase">Deliver to You</h2>
                    <p className="text-gray-400 leading-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    );
}
