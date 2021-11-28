import * as React from 'react';
import { Link } from 'react-router-dom';

export interface SizeProps {
    sizeList: string[],
    selectedSize: string,
    handleChange: Function
}

export function Size(props: SizeProps) {
    const { handleChange, sizeList, selectedSize } = props;

    const handleSizeChange = (e: any) => {
        handleChange(e.target.value);
    }
    return (
        <div className="mt-10 items-center">
            <div className="flex justify-between mb-1">
                <h3 className="font-medium">Select Size</h3>
                <Link to="/" className="text-gray-400">Size Guide</Link>
            </div>
            <div className="flex flex-wrap">

                {sizeList.map(item => {
                    return (
                            <label className="inline-flex m-0.5 cursor-pointer">
                                <input value={item} type="radio" className="form-radio h-5 w-full hidden" onClick={handleSizeChange} /><span className={`border-2 px-8 py-5 transition ease-in duration-75 ${selectedSize.includes(item) ? " bg-black text-white border-current" : "hover:bg-black hover:text-white hover:border-current"}`}>{item}</span>
                            </label>
                    )
                })}
            </div>
        </div>
    );
}
