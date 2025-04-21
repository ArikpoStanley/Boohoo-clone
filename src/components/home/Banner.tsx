import React from 'react';
import Image from 'next/image';

const Banner = ({image}: {image: string}) => {
  return (
    <div className="">
      <div>
         <Image
          src={image}
          alt={"banner 2"}
          className='w-full h-full'
          width={1440}
          height={200}
        />
      </div>
    </div>
  );
};

export default Banner;