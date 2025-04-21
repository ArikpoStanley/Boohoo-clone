import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

interface CategoryCirclesProps {
  categories: CategoryItem[];
}

const CategoryCircles: React.FC<CategoryCirclesProps> = ({ categories }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center ">
        <div className="flex gap-4 md:gap-4 pb-4">
          {categories.map((category, index) => (
            <Link href={category.link} key={category.id} className="flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden">
                  {index !== 9 ? (
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className='flex h-full w-full rounded-full bg-gray-200 items-center justify-center'>
                      <p className='font-bold text-2xl'>{category?.name}</p>
                    </div>
                  )}
                </div>
                <span className="text-xs md:text-sm font-medium mt-2 uppercase tracking-wide">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCircles;