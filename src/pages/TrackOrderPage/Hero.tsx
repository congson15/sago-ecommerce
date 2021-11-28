import * as React from 'react';

export interface HeroProps {
}

export function Hero(props: HeroProps) {
    return (
        <div className="hidden lg:block">
            <h1 className="text-center font-bold text-3xl text-my-color">What's Your Order Status ?</h1>
            <div className="lg:grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:bg-dotted-line lg:bg-no-repeat lg:w-full lg:bg-center">
                <div>
                    <div className="flex flex-col">
                        <div className="flex justify-center md:mb-20 ">
                            <div className="border bg-white border-gray-400 rounded-md w-1/2 py-4 px-5 justify-center flex flex-wrap">
                                <div className="flex justify-center">
                                    <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/order-received.png" alt="" />
                                </div>
                                <div className="flex flex-wrap justify-center mb-5 flex-col">
                                    <h3 className="font-bold text-xl leading-5 text-gray-500 text-center mb-3">Order Received</h3>
                                    <p className="text-center text-gray-400 font-extralight">Your order has been received by your courier partner </p></div>
                            </div>
                        </div>
                        <div className="my-8"></div>
                        <div className="flex justify-center md:justify-end">
                            <div className="border bg-white border-gray-400 rounded-md w-1/2 py-4 px-5 justify-center flex flex-wrap">
                                <div className="flex justify-center">
                                    <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/order-picked.png" alt="" />
                                </div>
                                <div className="flex flex-wrap justify-center mb-5 flex-col">
                                    <h3 className="font-bold text-xl leading-5 text-gray-500 text-center mb-3">Order Picked</h3>
                                    <p className="text-center text-gray-400 font-extralight">Your order has been picked up by your courier partner </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hidden md:flex justify-center mx-4">
                        <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/order-status-banner.png" className="w-3/5 mt-2" />                  </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-8 md:mb-20 ">
                            <div className="border bg-white border-gray-400 rounded-md w-1/2 py-4 px-5 justify-center flex flex-wrap">
                                <div className="flex justify-center">
                                    <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/reached-destination.png" alt="" />
                                </div>
                                <div className="flex flex-wrap justify-center mb-5 flex-col">
                                    <h3 className="font-bold text-xl leading-5 text-gray-500 text-center mb-3">Reached Destination</h3>
                                    <p className="text-center text-gray-400 font-extralight">Your order has reached your customer’s city</p></div>
                            </div>
                        </div>
                        <div className="my-8"></div>
                        <div className="flex justify-center">
                            <div className="border bg-white border-gray-400 rounded-md w-1/2 py-4 px-5 justify-center flex flex-wrap">
                                <div className="flex justify-center">
                                    <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/out-for-delivery.png" alt="" />
                                </div>
                                <div className="flex flex-wrap justify-center mb-5 flex-col">
                                    <h3 className="font-bold text-xl leading-5 text-gray-500 text-center mb-3">Out For Delivery</h3>
                                    <p className="text-center text-gray-400 font-extralight">Deliver orders at customer's doorstep</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-start-2 md:col-end-3 md:mt-10 my-8">
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <div className="border bg-white border-gray-400 rounded-md w-1/2 py-4 px-5 justify-center flex flex-wrap">
                                <div className="flex justify-center ">
                                    <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/order-in-transit.png" alt="" />
                                </div>
                                <div className="flex flex-wrap justify-center mb-5 flex-col">
                                    <h3 className="font-bold text-xl leading-5 text-gray-500 text-center mb-3">Order In Transit</h3>
                                    <p className="text-center text-gray-400 font-extralight">Your order is on it’s way to your customer’s address</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
