import React from 'react';

import Policy from './Policy';
import Table from './Table';


const Content = () => {
  

  return (
    <div className='w-[100%] overflow-hidden flex' style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
      <h1 className='text-indigo-800 text-2xl font-bold mt-4'>Choose a plan when you need powerful features</h1>
    <Table />

      <h1 className='text-indigo-950 text-xl mb-12'>
        <span className='font-bold'>30 day money back:</span> 100% satisfied with any paid plan or get a full refund.
      </h1>
      <button className='md:m-5 text-white bg-green-500 text-2xl lg:p-6 rounded-full sm:text-medium sm:m-4 sm:p-5 '>Create Whatsapp Form</button>
      <p className='text-gray-400 text-md '>No credit card required. No coding required.</p>
       <Policy />
      <div className='flex flex-col py-20 gap-5' style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
        <h1 className='font-bold text-3xl text-indigo-950'>Promote WhatsForm</h1>
        <p className='font-medium text-indigo-950'>Are you a consultant, content creator, or an agency? Now you can earn by helping your clients!</p>
        <h3 className='font-bold text-xl hover:text-indigo-950 text-green-500'>Join our Affiliate Plan</h3>
      </div>
    </div>
  );
};

export default Content;
