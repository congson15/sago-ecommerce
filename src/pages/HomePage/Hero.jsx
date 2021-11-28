import * as React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-carousel-minimal';

const data = [
  {
    image: "https://ananas.vn/wp-content/uploads/TheLastSale-1920x1050Home.jpg",

  },
  {
    image: "https://d1csarkz8obe9u.cloudfront.net/embeddesigns/b9ab6be6216e782402f19616de486b0e_embed.jpg",
  },
  
];


export function Hero() {
  return (
    <>
        <Carousel
          data={data}
          time={10000}
          width="2080px"
          height="800px"
          slideNumber={true}
          automatic={true}
          dots={true}
          slideBackgroundColor="darkgrey"
          slideImageFit="object-fit"
        />
    </>
  );
}
