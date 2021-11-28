import * as React from 'react';

interface FilterBySizeProps {
    sizes: number[],
    filters: any,
    onChange: Function,
}

export function FilterBySize({ sizes, filters, onChange }: FilterBySizeProps) {

    const [isVisible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(
        new Array((sizes.length)).fill(false)
    )


    const handleVisibleChange = () => {
        setVisible(!isVisible);
    }

    const handleChecked = (position: any) => {
        let newChecked = [...checked];
        const updatedCheckedState = newChecked.map((item, index) =>
            index === position ? !item : item
        );
        let checkedSize = sizes.filter((item, index) => updatedCheckedState[index] === true).join(",");
        if (checkedSize) {
            let newFilter = {
                'sizes': checkedSize
            }
            onChange(newFilter);
            setChecked(updatedCheckedState);
            return;
        }
        delete filters.sizes;
        onChange(filters);
        setChecked(updatedCheckedState);


    }

    return (
        <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">

                <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                    <span className="font-medium text-gray-900">
                        Size
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

                        <ul className="flex flex-wrap">
                            {sizes.map((item, index) => {
                                return (
                                    <li key={(item)}>
                                        <label className="inline-flex items-center mt-2">
                                            <input value={item} checked={checked[index]} onChange={() => handleChecked(index)} type="checkbox" className="form-checkbox cursor-pointer hidden" /><span className={`text-xs border border-gray-200 rounded-sm h-10 w-10 mx-1 flex items-center justify-center cursor-pointer shadow-sm ease-out transform hover:scale-110 transition duration-300 ${checked[index] ? `bg-black text-gray-50 ` : `hover:bg-black hover:text-gray-50`}`}>{item}</span>
                                        </label>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
            }
        </div>

    )
}