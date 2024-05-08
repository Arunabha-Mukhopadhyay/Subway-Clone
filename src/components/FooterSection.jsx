import React from 'react';

const FooterSection = () => {
  return (
    <footer className="h-52 w-full bg-white mt-10 relative overflow-visible flex justify-center items-center shadow-md sm:mt-44 lg:mt-10">  {/* Adjusted styles */}
      <ul className='flex justify-evenly border-b-4 border-solid border-black mb-20 gap-3 w-3/4'>
        <li className='mb-5'>
          <h1 className='text-green-700 font-medium text-xl'>Contact</h1>
          <h2 className='text-black text-sm'>Customer Care</h2>
          <h2 className='text-black text-sm'>Feedback</h2>
        </li>
        <li>
          <h1 className='text-green-700 font-medium text-xl'>Subway Cares</h1>
          <h2 className='text-black text-sm'>Nutrition Information</h2>
        </li>
        <li>
          <h1 className='text-green-700 font-medium text-xl'>Legal</h1>
          <h2 className='text-black text-sm'>Privacy Policy</h2>
          <h2 className='text-black text-sm'>Terms & Conditions</h2>
        </li>
      </ul>
    </footer>
  );
};

export default FooterSection;
