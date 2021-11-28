import * as React from 'react';

interface FilterByBrandProps {
    brandList: string[],
    filters: any,
    onChange: Function,
}

export function FilterByBrand({ brandList, filters, onChange }: FilterByBrandProps) {

    const [isVisible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(
        new Array((brandList.length)).fill(false)
    )


    const handleVisibleChange = () => {
        setVisible(!isVisible);
    }

    const handleChecked = (position: any) => {
        let newChecked = [...checked];
        const updatedCheckedState = newChecked.map((item, index) =>
            index === position ? !item : item
        );
        let checkedBrand = brandList.filter((item, index) => updatedCheckedState[index] === true).join(",");
        if(checkedBrand){
            let newFilter = {
                'brands': checkedBrand
            }
            onChange(newFilter);
            setChecked(updatedCheckedState);
            return
        }
        delete filters.brands;
        onChange(filters);
        setChecked(updatedCheckedState);
    }

    return (
        <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">

                <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-gray-900">
                        Brand
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
                    <div className="pt-6" id="filter-section-2">
                        <ul className="flex flex-col">
                            {brandList.map((brand, index) => {
                                return (
                                    <label className="inline-flex items-center mt-3" key={index}>
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" onChange={() => handleChecked(index)} value={brand} checked={checked[index]} /><span className="ml-2 text-gray-700">{brand}</span>
                                    </label>
                                )
                            })}
                        </ul>
                    </div>
            }
        </div>

    )
}