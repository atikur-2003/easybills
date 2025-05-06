import React from 'react';
import { FaFile, FaLock, FaPiggyBank, FaRegLifeRing, FaRocket } from 'react-icons/fa';
import { FaHandshakeAngle, } from 'react-icons/fa6';

const WhyChoose = () => {
    return (
        <div className='max-w-[1024px] mx-auto mt-24'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-4xl text-[#0c2f54] font-semibold mb-5'>Why choose EasyBills?</h1>
                <p className='text-lg md:text-2xl text-[#535b61] '>Save Time and Money!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 md:mt-16 px-3 lg:px-0'>
                <div className='flex items-center gap-7'>
                    <div className='border border-[#dee2e6] rounded-full p-4'>
                        <FaPiggyBank size={35} className='text-[#0071cc]'></FaPiggyBank>
                    </div>
                    <div>
                        <h2 className='text-2xl text-[#0c2f54] font-semibold mb-2'>Low cost</h2>
                        <p className='text-base text-[#535b61]'>Always get cheapest price with the best in the industry.</p>
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='border border-[#dee2e6] rounded-full p-4'>
                        <FaRocket size={35} className='text-[#0071cc]'></FaRocket>
                    </div>
                    <div>
                        <h2 className='text-2xl text-[#0c2f54] font-semibold mb-2'>Fast</h2>
                        <p className='text-base text-[#535b61]'>Pay your bills in a fastest way.</p>
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='border border-[#dee2e6] rounded-full p-4'>
                        <FaFile size={35} className='text-[#0071cc]'></FaFile>
                    </div>
                    <div>
                        <h2 className='text-2xl text-[#0c2f54] font-semibold mb-2'>Simple</h2>
                        <p className='text-base text-[#535b61]'>You can use our service and pay bills in a easy way.</p>
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='border border-[#dee2e6] rounded-full p-4'>
                        <FaHandshakeAngle size={35} className='text-[#0071cc]'></FaHandshakeAngle>
                    </div>
                    <div>
                        <h2 className='text-2xl text-[#0c2f54] font-semibold mb-2'>Trust pay</h2>
                        <p className='text-base text-[#535b61]'>100% Payment Protection. Easy Return Policy.</p>
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='border border-[#dee2e6] rounded-full p-4'>
                        <FaLock size={35} className='text-[#0071cc]'></FaLock>
                    </div>
                    <div>
                        <h2 className='text-2xl text-[#0c2f54] font-semibold mb-2'>100% Secure Payments</h2>
                        <p className='text-base text-[#535b61]'>We ensure you 100% secure payment and transaction.</p>
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='border border-[#dee2e6] rounded-full p-4'>
                    <FaRegLifeRing size={35} className='text-[#0071cc]'></FaRegLifeRing>
                    </div>
                    <div>
                        <h2 className='text-2xl text-[#0c2f54] font-semibold mb-2'>24X7 Support</h2>
                        <p className='text-base text-[#535b61]'>You can get any kind of service related to your transaction from our support team 24X7.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChoose;