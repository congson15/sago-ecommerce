import * as React from 'react';
import { FilterByCategory } from './Filters/FilterByCategory';
import { FilterByPrice } from './Filters/FilterByPrice';
import { FilterByBrand } from './Filters/FilterByBrand';
import { FilterBySize } from './Filters/FilterBySize';
import { FilterByColor } from './Filters/FilterByColor';

interface ProductFilterProps {
    filters: any,
    onChange: Function,
}

let sizeList = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
let brandList = ['Nike', 'Converse', 'Adidas', 'Vans', 'Balenciaga', 'Puma', 'New Balance', 'Another'];
let colorList = [
    {
        color: 'red',
    },
    {
        color: 'blue',
    },
    {
        color: 'yellow',
    },
    {
        color: 'green',
    },
    {
        color: 'gray',
    },
    {
        color: 'pink',
    },
]

export function ProductFilters({ filters, onChange }: ProductFilterProps) {

    const handleChange = (newFilters: any) => {
        onChange(newFilters);
    }

    return (
        <>
            <div className="hidden lg:block w-60 sticky h-screen top-1 overflow-y-scroll">
                <FilterByCategory onChange={handleChange} />
                <FilterByColor colorList={colorList} onChange={handleChange} filters={filters}/>
                <FilterByPrice onChange={handleChange} />
                <FilterByBrand brandList={brandList} onChange={handleChange} filters={filters} />
                <FilterBySize sizes={sizeList} onChange={handleChange} filters={filters} />
            </div>
        </>


    )
}