import React, { useState } from "react";
import { useHistory } from "react-router";



export function EmptyCart() {


    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    }

    return (
        <div className="flex container mx-auto justify-center items-center px-4 md:px-10 py-20">
            <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-gray-800 text-center md:w-9/12 lg:w-7/12">There are no items in your cart.</h1>
                <div className="mt-12 md:mt-14 w-full flex justify-center">
                    <button onClick={handleBackClick} className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white">
                        Back to store
                    </button>
                </div>
            </div>
        </div>
    );
}
