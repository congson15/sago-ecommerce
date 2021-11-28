import * as React from 'react';

export interface QuantityFormProps {
    quantity: number,
    handleQuantityChange: Function,
}



export function QuantityForm({quantity, handleQuantityChange}: QuantityFormProps) {

    const handleChange = (e:any) => {
        handleQuantityChange(e.target.value);
    }

    return (
        <div className="flex ml-2 mt-10 ">
            <div className="flex w-28 border border-gray-400 border-opacity-30 rounded">
                <button className="flex items-center justify-center w-8">-</button>
                <div className="flex-1">
                    <input type="text" className="h-full w-full text-center" value={quantity} onChange={handleChange}/>
                </div>
                <button className="flex items-center justify-center w-8">+</button>
            </div>
            <button className="ml-8 transition ease-in duration-300 flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Mua hàng</button>
        </div>
    );
}
