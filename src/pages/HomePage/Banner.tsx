import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex md:flex-row items-strech justify-between bg-gray-100 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800">Sneakers Day's</h1>
                        <p className="text-base lg:text-xl  text-gray-800 mt-5">
                            Sale up to <span className="font-bold">50%</span>
                        </p>
                        <Link to="products" className="w-full lg:w-1/2 justify-between uppercase dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800  mt-8 text-base focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                            Shop now
                            <div className="ml-2 mt-0.5">
                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end h-40 md:h-64">
                        <img src="https://hanghieuvip.net/wp-content/uploads/2021/03/giay-nike-af1-07.png" alt="" />
                    </div>
                </div>
                <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-banner-left bg-bottom bg-cover bg-opacity-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-around relative">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-50">Sport Shoes</h1>
                        <p className="text-base lg:text-xl text-gray-50">
                            Sale up to <span className="font-bold">30%</span>
                        </p>
                    </div>
                    <Link to="products" className="w-full justify-between uppercase  mt-8 text-base focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                        Shop now
                        <div className="ml-2 mt-0.5">
                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

