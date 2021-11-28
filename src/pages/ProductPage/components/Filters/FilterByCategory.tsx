import * as React from 'react';

interface FilterByCategoryProps {
    onChange: Function
}

let categoryData = [
    {
        id: 1,
        name: 'Men'
    },
    {
        id: 2,
        name: 'Women'
    },
];

export function FilterByCategory({ onChange }: FilterByCategoryProps) {


    const handleCategoryClick = (category: any) => {
        const newFilters = {
            'category': category.name
        };
        onChange(newFilters);
    }


    return (
        <>
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                {categoryData.map(category => {
                    return (
                        <li className="transition duration-500 cursor-pointer  my-3 leading-5 hover:text-my-color" key={category.id} onClick={() => { handleCategoryClick(category) }}>{category.name}</li>
                    )
                })}
            </ul>
        </>
    )
}