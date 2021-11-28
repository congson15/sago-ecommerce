import * as React from 'react';

export interface FilterByColorProps {
    colorList: Array<any>,
    onChange: Function,
    filters: any
}


export function FilterByColor({ colorList, onChange, filters }: FilterByColorProps) {

    const [isVisible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(
        new Array((colorList.length)).fill(false)
    )

    React.useEffect(() => {
        console.log(filters);
    },[])

    const handleVisibleChange = () => {
        setVisible(!isVisible);
    }

    const handleColorClick = (position: number) => {
        let newChecked = [...checked];
        const updatedCheckedState = newChecked.map((item, index) =>
            index === position ? !item : item
        );
        let checkedColor = colorList.filter((item, index) => updatedCheckedState[index] === true);
        let colorString = checkedColor.map(item => item.color).join(",");
        if (colorString) {
            let newFilter = {
                'colors': colorString
            }
            onChange(newFilter);
            setChecked(updatedCheckedState);
            return
        }
        delete filters.colors;
        onChange(filters);
        setChecked(updatedCheckedState);


    }
    return (
        <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
                <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                    <span className="font-medium text-gray-900">
                        Color
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
                    <div className="pt-6 flex flex-wrap" id="filter-section-0">
                        {colorList.map((color, index) => {
                            return (
                                <button className="flex flex-col h-full w-4/12 items-center min-h-68 ease-out transform hover:scale-110 transition duration-500" value={color.color} key={index} onClick={() => handleColorClick(index)}>
                                    <div className={`h-7 w-7 rounded-full bg-${color.color}-600 flex justify-center items-center`}>
                                        {
                                            checked[index] ?
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                : null
                                        }

                                    </div>
                                    <span className="capitalize inline-block whitespace-normal break-words">{color.color}</span>
                                </button>
                            )
                        })}
                    </div>
            }

        </div>
    );
}
