import * as React from 'react';
import { toast } from 'react-toastify';

interface FilterByPriceProps {
    onChange: Function
}

export function FilterByPrice({ onChange }: FilterByPriceProps) {

    const [isVisible, setVisible] = React.useState(false);
    const [values, setValues] = React.useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    })
    const handleVisibleChange = () => {
        setVisible(!isVisible);
    }

    const handleSubmit = () => {
        if(values.salePrice_gte <= 0 || values.salePrice_lte <= 0 || !values.salePrice_lte || !values.salePrice_gte){
            toast.warn('Not valid price');
            return;
        }
        onChange(values);
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (

        <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">

                <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                    <span className="font-medium text-gray-900">
                        Price
                    </span>
                    <span className="ml-6 flex items-center" onClick={handleVisibleChange}>
                        {
                            isVisible ?
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                                :
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                        }

                    </span>
                </button>
            </h3>
            {
                isVisible ? null :
                    <div className="pt-6" id="filter-section-1">
                        <div className="flex p-2">
                            <input className="border border-gray-300 w-1/2 focus:outline-none focus:ring focus:border-purple-300" name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                            <span className="mx-3 text-gray-500">-</span>
                            <input className="border border-gray-300 w-1/2 focus:outline-none focus:ring focus:border-purple-300" name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
                        </div>
                        <button onClick={handleSubmit} className="w-1/3 ml-2 border mt-4 border-purple-500 hover:border-purple-700 text-purple-500 font-bold p-0.5 rounded">
                            Apply
                        </button>
                    </div>
            }
        </div>
    )
}