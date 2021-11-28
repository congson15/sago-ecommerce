import * as React from 'react';
import { Hero } from './Hero';
import { useHistory, useRouteMatch } from 'react-router';

export interface TrackOrderProps {
}

export function TrackOrder(props: TrackOrderProps) {
    const match = useRouteMatch();
    const history = useHistory();
    const handleTrackingOrder = () => {
        history.push(`${match.url}/list`);
    }

    return (
        <>
            <div className="flex-col flex md:flex-row justify-around my-28">
                <div>
                    <h1 className="font-semibold text-5xl text-my-color">Track Your Orders Easily</h1>
                    <blockquote className="text-2xl py-5 text-gray-600 font-medium">Just enter your phone number & it’s done.</blockquote>
                    <img className="w-full" src="https://image.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148535315.jpg" />
                </div>
                <div className="w-full md:w-2/6 flex items-center">
                    <div className="rounded-3xl shadow-md p-10">
                        <h2 className="font-bold text-xl text-my-color my-5">Enter Details</h2>
                        <input className="border bg-gray-100 border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Phone Number" />
                        <button onClick={handleTrackingOrder} className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                            Track Now
                        </button>
                    </div>
                </div>
            </div>
            <Hero />
        </>
    );
}
