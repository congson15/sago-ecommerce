import * as React from 'react';
import { Link } from 'react-router-dom';
import { ImageSlide } from '../ImageSlider/ImageSlide';
import { ProductPolicy } from './Policy';
import { Rating } from './Rating';
import { Size } from './Size';
import {
  useParams
} from "react-router-dom";
import { ProductReview } from './ProductReview';
import { RelatedProducts } from './RelatedProducts';
import { Accordion } from './components/Accordion';
import { QuantityForm } from './components/QuantityForm';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../CartPage/cartSlice';
import { toast } from 'react-toastify';



export interface ItemDetailProps {
}

const sizeList = ['38', '39', '40', '41', '42', '43'];

const data = [
  {
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/037c035b-14e3-4cb2-a9c5-65f377f7d1ed/air-zoom-pegasus-38-running-shoes-Hmsj6Q.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1510a451-1b8b-441f-b424-f02d54cd6001/air-zoom-pegasus-38-flyease-womens-running-shoe-0gpVcx.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1433cc5c-692b-42dc-8bfe-f61775f74112/air-zoom-pegasus-38-road-running-shoes-mPchsD.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1510a451-1b8b-441f-b424-f02d54cd6001/air-zoom-pegasus-38-flyease-womens-running-shoe-0gpVcx.png",
  },
  {
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1510a451-1b8b-441f-b424-f02d54cd6001/air-zoom-pegasus-38-flyease-womens-running-shoe-0gpVcx.png",
  },


];


export function ProductDetail(props: ItemDetailProps) {
  let { slug }: any = useParams();
  const [showDiscription, setShowDiscription] = React.useState(false);
  const [showPolicy, setShowPolicy] = React.useState(false);
  const [showReviews, setShowReviews] = React.useState(false);
  const [size, setSize] = React.useState('38');
  const dispatch = useDispatch();


  const handleDiscriptionToggle = (visible: boolean) => {
    setShowDiscription(visible);
  }
  const handleReviewsToggle = (visible: boolean) => {
    setShowReviews(visible);
  }
  const handlePolicyToggle = (visible: boolean) => {
    setShowPolicy(visible);
  }

  const handleAddToCart = (newItem: any) => {
    const actions = addToCart({
      id: "1",
      name: "Test",
      price: 300,
      quantity: 1,
    });
    dispatch(actions);
    toast.success('Added');

  }

  const handleSizeChange = (newSize: any) => {
    if (size === newSize) {
      return;
    }
    setSize(newSize);
  }


  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container flex flex-col md:flex-row px-5 py-24 mx-auto">
          <div className="w-full mx-auto mr-5">
            <div
              className="text-sm text-left text-gray-600 bg-opacity-10 h-12 flex items-center p-4 rounded-md"
              role="alert"
            >
              <ol className="list-reset flex text-grey-dark">
                <li><Link to="/" className="font-bold">Home</Link></li>
                <li><span className="mx-2">/</span></li>
                <li>Product name</li>
              </ol>
            </div>
            <ImageSlide images={data} />
            {/* <img alt="ecommerce" className="w-full object-cover object-center rounded border border-gray-200" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/037c035b-14e3-4cb2-a9c5-65f377f7d1ed/air-zoom-pegasus-38-running-shoes-Hmsj6Q.png" /> */}
          </div>
          <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Nike</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
            <span className="title-font font-medium text-2xl mb-2 block text-red-600">$500</span>
            <Rating />
            <Size handleChange={handleSizeChange} sizeList={sizeList} selectedSize={size} />
            <button
            className="
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-black
						w-full
						py-4
            mt-6
						hover:bg-opacity-80
					"
          onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <Accordion isShow={showDiscription} handleToggleChange={handleDiscriptionToggle} title="Description" content="Product description" />
            <Accordion isShow={showPolicy} handleToggleChange={handlePolicyToggle} title="Free Delivery and Returns" content={<ProductPolicy />} />
            <Accordion isShow={showReviews} handleToggleChange={handleReviewsToggle} title="Reviews (0)" content={<ProductReview />} />
          </div>
        </div>
      </section>
      <RelatedProducts />
    </div>
  );
}
