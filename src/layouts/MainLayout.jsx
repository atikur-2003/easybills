import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';

const MainLayout = () => {
    const {state} = useNavigate()
    return (
        <div>
            <header>
            <Navbar></Navbar>
            </header>
            <main>
            {state == "loading"? <Loading></Loading>: <Outlet></Outlet> }
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;