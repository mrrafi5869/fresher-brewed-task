import React from 'react';
import SideNav from './SideNav/SideNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <SideNav></SideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;