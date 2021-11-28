import * as React from 'react';

export interface ICartItemProps {
    product: any;
    handleRemoveItemFromCart: Function,
    handleQuantityChange: Function
}

export function CartItem(props: ICartItemProps) {
    const { product, handleRemoveItemFromCart, handleQuantityChange } = props;
    const getTotal = (price: number, quantity: number) => {
        return price * quantity;
    }

    React.useEffect(() => {
        if(product.quantity < 0 ) {
            handleQuantityChange(product.id,0);
            return;
        }
    },[product.quantity])

    const handleRemove = (productId: number) => {
        handleRemoveItemFromCart(productId);
    }

    const onChange = (event: any) => {
        let newQuantity;
        if(!event.target){
            newQuantity = event;
            handleQuantityChange(product.id,Number.parseInt(newQuantity));
            return;
        }
        if(event.target.value === ''){
            handleQuantityChange(product.id,0);
            return;
        }
        newQuantity = event.target.value;
        handleQuantityChange(product.id,Number.parseInt(newQuantity));
        
    }

    return (

        <li className="grid grid-cols-6 gap-2 border-b-1" key={product.id}>
            <div className="col-span-1 self-center">
                <img src="https://giayxshop.vn/wp-content/uploads/2020/09/z2077503002271_01faf21b4b4c32f91923383638f5b371-300x300.jpg" alt="Product" className="w-full" />
            </div>
            <div className="flex flex-col col-span-3 pt-2">
                <span className="text-my-color md:text-md font-semibold cursor-pointer">{product.name}</span>
                <span className="md:hidden text-red-600 text-sm inline-block pt-2">${product.price}</span>
                <button onClick={() => handleRemove(product.id)} className="flex font-semibold hover:text-red-500 text-gray-500 text-xs pt-2">remove</button>
            </div>
            <div className="flex justify-center col-span-2 pt-3 md:block">
                <div className="flex items-center space-x-2 text-sm justify-between">
                    <div className="flex justify-between w-/15">
                        <button onClick={() => onChange(product.quantity-1)}>
                            <svg className="fill-current text-my-color w-3" viewBox="0 0 448 512">
                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </button>
                        <input className="mx-2 border text-center w-8 flex items-center" type="text" value={product.quantity} onChange={onChange}/>
                        <button  onClick={() => onChange(product.quantity+1)}>
                            <svg className="fill-current text-my-color w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </button>
                    </div>
                    <span className="hidden text-red-600 font-semibold md:inline-block">${product.price}</span>
                    <span className="hidden text-red-600 font-semibold md:inline-block">${getTotal(product.price, product.quantity)}</span>
                </div>
            </div>
        </li>

    );
}
