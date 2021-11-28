import * as React from 'react';
import { ProductSort } from './components/ProductSort';
import { useLocation, useHistory } from "react-router-dom";
import { ProductFilters } from './components/ProductFilters';
import { ProductList } from './components/ProductList';
import { ProductSkeletonList } from './components/ProductSkeletonList';
import axiosClient from '../../api/axios-client';
import { ProductFiltersSidebar } from './components/ProductFiltersSidebar';
import { data } from './data';
import queryString from 'query-string'

export interface ListPageProps {
}



export function ListPage(props: ListPageProps) {
    
    const history = useHistory();
    const location = useLocation();
    const queryParams:any = queryString.parse(location.search);

    const [ productList, setProductList ] = React.useState<any>([]);
    const [isToggled, setToggled] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [filters, setFilters] = React.useState(() => ({
        ...queryParams,
        page: Number.parseInt(queryParams.page) || 1,
        sort: queryParams.sort || "asc"
    }));


    const fetchData = async () => {
        try{
            let response = await axiosClient.get('/products');
            if(!response){
                setProductList(data);
                setLoading(false);
                return;
            }
            setProductList(response);
            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
       
    }
    React.useEffect(() => {
        fetchData();
    }, []);

    React.useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        });
    }, [history,filters]);

    const handleSortChange = (newValue: any) => {
        setFilters((prevFilters:any) => ({
            ...prevFilters,
            sort: newValue
        }))
    }
    const handleFiltersChange = (newFilters: object) => {
        setFilters((prevFilters:any) => ({
            ...prevFilters,
            ...newFilters
        }))
    }

    const handleLoadmoreClick = (page: any): any => {
        setFilters((prevFilters:any) => ({
            ...prevFilters,
            page: page,
        }))
    }

    const handleToggledChange = () => {
        setToggled(!isToggled);
    }

    return (


        <div className="bg-white">
            <div>
                {!isToggled ? null :
                    <div className="ease-linear transform transition duration-500 fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">

                        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

                        <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" onClick={handleToggledChange} className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>


                            <div className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ProductFiltersSidebar filters={filters} onChange={handleFiltersChange} />
                            </div>
                        </div>
                    </div>
                }


                <main className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ProductSort currentSort={filters.sort} onChange={handleSortChange} onClick={handleToggledChange} />
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10">
                            <ProductFilters filters={filters} onChange={handleFiltersChange} />

                            <div className="lg:col-span-4">
                                {loading ? <ProductSkeletonList /> : <ProductList productList={productList}/>}
                                <div className="flex justify-center">
                                    <button onClick={handleLoadmoreClick} className="w-full md:w-1/2 text-gray-700 hover:border-gray-900  hover:text-gray-900 border cursor-pointer my-10 font-bold py-2 px-4 uppercase transition duration-300 ease-in-out">
                                        Show 30 More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>

    );
}
