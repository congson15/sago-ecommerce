import * as React from 'react';

export interface ProductPolicyProps {
}

export function ProductPolicy(props: ProductPolicyProps) {
    return (
        <div className="flex flex-col border-dashed border-4 px-5 py-3 mx-auto">
            <div className="flex border-b-2 border-gray-100 pb-3">
                <div className="border rounded-full w-14 bg-pink-300 h-14 flex justify-center align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-1 text-my-color" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                </div>
                <h3 className="flex items-center ml-5 uppercase">Free delivery</h3>
            </div>
            <div className="flex mt-3 border-b-2 border-gray-100 pb-3">
                <div className="border rounded-full w-14 bg-green-300 h-14 flex justify-center align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-2 text-my-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>
                <h3 className="flex items-center ml-5 uppercase">EASY RETURNS</h3>
            </div>
            <div className="flex mt-3">
                <div className="border rounded-full w-14 bg-blue-300 h-14 flex justify-center align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-2 text-my-color" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h3 className="flex items-center ml-5 uppercase">delivered to your door</h3>
            </div>
        </div>
    );
}
