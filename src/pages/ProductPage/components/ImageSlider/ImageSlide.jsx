import * as React from 'react';
import { Carousel } from 'react-carousel-minimal';

const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}
export function ImageSlide(props) {
    const { images } = props


    return (
        <>
            <Carousel
                data={images}
                height="800px"
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                slideImageFit="cover"
                thumbnails={true}
                className="justify-center"
            />
        </>
    );
}
