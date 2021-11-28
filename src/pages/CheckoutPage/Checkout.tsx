import * as React from 'react';
import axiosClient from '../../api/axios-client';
import { MyCart } from './MyCart';
import { AreasSelect } from './components/AreasSelect';
interface CheckoutProps{
    cartList: Array<object>,
    cartTotal: number,
}

export function Checkout({cartList, cartTotal} : CheckoutProps) {

    const [ provinceList , setProvinceList] = React.useState([]);
    const [ selectedProvince, setSelectedProvince ] = React.useState("79");
    const [ districtList, setDistrictList ] = React.useState([]);
    const [ selectedDistrict, setSelectedDistrict ] = React.useState("774");
    const [ wardList, setWardList ] = React.useState([]);
    const [ selectedWard, setSelectedWard ] = React.useState("27307");

    const fetchData = async (path:string) => {
        let response:any = await axiosClient.getAreas(path);
        return response.results;
    }

    React.useEffect(() => {
        initWardList();
    },[selectedDistrict])

    React.useEffect(() => {
        initDistrictList();
    },[selectedProvince])

    const handleProvinceChange = (code:string) => {
        setSelectedProvince(code);
    }
    const handleDistrictChange = (code:string) => {
        setSelectedDistrict(code);
    }
    const handleWardChange = (code:string) => {
        setSelectedWard(code);
    }

    const initProvinceList = async () => {
        try{
            let results = await fetchData('/province');
            setProvinceList(results);
        }
        catch(error){
            console.log(error)
        }
    }
    const initDistrictList = async () => {
        try{
            let results = await fetchData(`/district?province=${selectedProvince}`);
            setDistrictList(results);
            setSelectedDistrict(results[0].code);
           
        }
        catch(error){
            console.log(error);
        }
    }
    const initWardList = async () => {
        try{
            let results = await fetchData(`/commune?district=${selectedDistrict}`);
            
            setWardList(results);
        }
        catch(error){
            console.log(error);
        }
    }
    React.useEffect(() => {
        initProvinceList();
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
            <div className="space-y-8 ">
                <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                    <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                        <div className="text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-sm font-medium ml-3">Payment</div>
                    </div>
                    <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                </div>
                <div className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Full name
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Họ tên của bạn" />
                            <p className="text-red-500 text-xs italic">vUI LÒNG ĐIỀN VÔ ĐÂY.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Phone number
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Số điện thoại của bạn" />
                            <p className="text-red-500 text-xs italic">vUI LÒNG ĐIỀN VÔ ĐÂY.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <AreasSelect title="City" data={provinceList} selected={selectedProvince} onChange={handleProvinceChange}/>
                        <AreasSelect title="District" data={districtList} selected={selectedDistrict} onChange={handleDistrictChange}/>
                        <AreasSelect title="Ward" data={wardList} selected={selectedWard} onChange={handleWardChange}/>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Address
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="273 An Dương Vương" />
                            <p className="text-red-500 text-xs italic">vUI LÒNG ĐIỀN VÔ ĐÂY.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Note
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Ghi chú về đơn hàng" />
                        </div>
                    </div>
                </div>
            </div>
            <MyCart cartList={cartList} cartTotal={cartTotal}/>
        </div>
    );
}
