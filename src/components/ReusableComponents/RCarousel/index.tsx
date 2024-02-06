import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

interface RCarouselProps {
  imgData: Array<string>;
}

const RCarousel: React.FC<RCarouselProps> = ({ imgData }) => {

  // console.log(imgData, "UHSN-0-00-0");
  
  return (
    <div>
      <Carousel
        navButtonsAlwaysVisible
        animation="slide"
        indicatorContainerProps={{
          className: "z-10 relative mt-[-30px] bg-white opacity-40 max-h-[380px]",
        }}
      >
        {imgData?.map((src, key) => (
          <Image
            key={key}
            alt="img"
            src={src}
            height={500}
            width={500}
            className="object-cover max-h-[380px] w-[100%]"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default RCarousel;
