import React from 'react';
import image from '../assets/Error.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <img className='w-64' src={image} alt="" />
            <Link to='/' className='mt-5 btn bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white'>Go To Home</Link>
        </div>
    );
};

export default ErrorPage;