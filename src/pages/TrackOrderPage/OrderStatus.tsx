import * as React from 'react';
import { useHistory } from 'react-router';

export interface OrderDetailProps {
}

let data = [
    {
        title: 'Chờ xác nhận',
        bgColor: 'bg-yellow-500',
        description: 'Đơn hàng của bạn đang chờ được xác nhận'
    },
    {
        title: 'Đã hủy đơn hàng',
        bgColor: 'bg-red-500',
        description: 'Thích thì bơm thui'
    }


]

export function OrderDetail(props: OrderDetailProps) {
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    }
    return (

        <div className="p-4">
            <div>
                <button onClick={handleBackClick} className="bg-gray-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Go Back
                </button>
            </div>

            <div className="mt-4">

                <h1 className="text-4xl text-center font-semibold mb-6 text-gray-500">#12345 Order Detail</h1>
                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
                        {data.map(item => {
                            return (
                                <div className="flex md:contents">
                                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className={"h-full w-1 pointer-events-none " + `${item.bgColor}`}></div>
                                        </div>
                                        <div className={"w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow text-center " + `${item.bgColor}`}>
                                            <i className="fas fa-exclamation-circle text-gray-50"></i>
                                        </div>
                                    </div>
                                    <div className={`${item.bgColor}` + " col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"}>
                                        <h3 className="font-semibold text-lg mb-1 text-gray-50">{item.title}</h3>
                                        <p className="leading-tight text-justify">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
