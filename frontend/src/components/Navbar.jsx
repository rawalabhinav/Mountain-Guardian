import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Mountain.svg';

const Navbar = () => {

    return (
        <nav className="bg-zinc-950 bg-opacity-90">
            <div className=" flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        to="/" >
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-20 w-20 ml-2 rounded-2xl"
                        />
                    </Link>
                    <Link
                        to="/">
                        <div className="flex flex-col items-center">
                            <span className="text-white text-2xl font-semibold ml-4">Mountain</span>
                            <span className="text-white  font-semibold ml-4">Guardian</span>
                        </div>
                    </Link>

                </div>

                <div className="flex items-center space-x-4 ">
                    <Link
                        to="/"
                        className="text-2xl text-white hover:text-blue-300 transition duration-300 px-3 rounded-lg "
                    >
                        Home
                    </Link>

                    <Link
                        to="/dashboard"
                        className="text-2xl text-white hover:text-blue-300 transition duration-300 px-3 rounded-lg "
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/about"
                        className="text-2xl text-white hover:text-blue-300 transition duration-300 px-4  rounded-lg"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
