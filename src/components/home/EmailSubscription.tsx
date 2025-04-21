"use client"
import React, { useState } from 'react';

const EmailSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="px-5 md:px-16 py-16 bg-gray-100">
      <div className="flex xl:flex-row flex-col justify-between">
        <div className='xl:w-1/2 xl:text-left text-center'>
          <h2 className="md:text-5xl text-2xl font-medium mb-2">Let&apos;s get to know each other</h2>
          <p className=" mb-6 text-[24px]">
            Sign up to receive emails from us, so you never miss out on the good stuff.
          </p>
        </div>
        
        <div className='xl:w-1/2 xl:text-left text-center'>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your email address"
              className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none bg-white focus:ring-1 focus:ring-gray-500"
              required
            />
            {/* Modified button to be centered and not full width on small screens */}
            <div className="flex justify-center md:block">
              <button 
                type="submit" 
                className="rounded-md xl:rounded-none px-8 py-3 bg-[#444444] text-white font-bold hover:bg-gray-700 transition duration-200 w-auto"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
          
          <p className="text-sm ">
            By submitting your details, you agree to receive marketing communications from Boohoo & our Family of Brands by email. 
            You can unsubscribe at any point. You also consent to the use of your details in accordance with our{' '}
            <a href="/privacy-policy" className="text-[#444444] underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;