import * as React from 'react';

import { useHistory, useRouteMatch } from 'react-router';
export interface OrderTableProps {
    orderList?: object;
}

export function OrderTable({orderList}: OrderTableProps) {
    const history = useHistory();
    const match = useRouteMatch();
    const handleDetailClick = () => {
        history.push(`${match.url}/2`);

    }
    return (
        <div className="mt-7">
            <table className="w-full whitespace-nowrap">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Shipping</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                        <td>
                            <div className="flex items-center pl-5">
                                <p className="text-base font-medium leading-none text-gray-700 mr-2 cursor-pointer">#123456</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </td>
                        <td className="pl-24">
                            <div className="flex items-center">
                                <p className="text-sm leading-none text-gray-600 ml-2">Tran Van Cuong</p>
                            </div>
                        </td>
                        <td className="pl-5">
                            <div className="flex items-center">
                                <p className="text-sm leading-none text-gray-600 ml-2">100$</p>
                            </div>
                        </td>
                        <td className="pl-5">
                            <div className="flex items-center">
                                <p className="text-sm leading-none text-gray-600 ml-2">2</p>
                            </div>
                        </td>
                        <td className="pl-5">
                            <div className="flex items-center">
                                <p className="text-sm leading-none text-gray-600 ml-2">50$</p>
                            </div>
                        </td>
                        <td className="pl-5">
                            <span className="py-3 px-3 text-sm focus:outline-none leading-none  rounded">250$</span>
                        </td>
                        <td className="pl-4">
                            <span className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Order Received</span>
                        </td>
                        <td>
                            <div className="px-5 pt-2">
                                <button onClick={handleDetailClick} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded mr-3">
                                    Detail
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                                    Cancel
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="h-3"></tr>

                </tbody>
            </table>
        </div>
    );
}
