import React, { useState } from 'react';
import bannerImage from '../../assets/image/whatwecollect/banner.png'; // Updated import path
import { data, categories } from './data'; // Importing data and categories directly from './data'

interface CategoryProps {
  category: { id: number; name: string };
  onClick: (name: string) => void;
}

// Category component
const Category: React.FC<CategoryProps> = ({ category, onClick }) => {
  return (
    <button
      onClick={() => onClick(category.name)} // Passing category.name to the onClick function
      className='m-1 border border-solid border-white text-white bg-green-800 hover:bg-white hover:text-green-800'
    >
      {category.name}
    </button>
  );
};

const Whatwecollect: React.FC = () => {
  const [items, setItems] = useState(data);

  // Filter by category
  const filterCategory = (categoryName: string) => {
    if (categoryName === "All") {
      setItems(data);
    } else {
      setItems(data.filter((item) => item.category === categoryName));
    }
  };

  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-#DCECBB font-extrabold'> What We  <span className='text-#DCECBB'> Collect </span></h1>
          <h3 className='px-4 text-1xl sm:text-2xl md:text-3xl lg:text-4xl font-times italic font-semibold'> <span className='text-#DCECBB'>Pack these items </span> into any shopping bag at home.</h3>
        </div>
        <img className='w-full max-h-[500px] object-cover' src={bannerImage} alt="/" />
      </div>

      <div className='max-w-[1200px] mx-auto py-12'>
        <h1 className='text-#364F39 font-bold text-4xl text-center'>
          Meet the Everyday items
        </h1>

        {/* Filter Row */}
        <div className='flex justify-center py-4'>
          {/* Filter Category */}
          <div>
            <p className='font-bold text-gray-700'>Filter Category</p>
            <div className='flex justify-center'>
              <Category category={{ id: 0, name: "All" }} onClick={filterCategory} /> {/* Adding "All" category */}
              {categories.map((category) => (
                <Category key={category.id} category={category} onClick={filterCategory} />
              ))}
            </div>
          </div>
        </div>

        {/* Display items */}
        <div className='grid grid-cols-5 lg:grid-cols-5 gap-4 pt-8'>
          {items.map((item, index) => (
            <div
              key={index}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-#FDF3D0 text-#182C17 p-1 rounded-full'>
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <h1 className='text-#364F39 font-bold text-4xl text-center'>
          And Many More...
        </h1>
      </div>
    </div>
  );
};

export default Whatwecollect;
