import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1 className='text-success'>My simple email Authentication system.</h1>
            <Outlet> </Outlet>
        </div>
    );
};

export default Main;