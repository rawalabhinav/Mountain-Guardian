import React, { useState, useEffect } from 'react';
import Model from './Scene';
import logo from '../assets/Logo.svg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton } from '@mui/material';

const Home = () => {
    const [isAnimated, setIsAnimated] = useState(true);

    useEffect(() => {
      setIsAnimated(true);
    }, []);

    return (
    <div className='bg-black h-screen relative flex flex-col items-center justify-center'>
        <div className= {`z-0 absolute h-half w-full ${isAnimated ? 'animate-fadeIn' : ''}`}> 
            <Model />
        </div>
        <img 
            className='z-2 absolute top-4 left-6'
            src={logo}>
        </img>
        
        <IconButton sx={{color: "white", position: "absolute", top: "1rem", right: "1rem"}}>
            <InfoOutlinedIcon />
        </IconButton>
  
        <div className='z-1 absolute'>
            <div className='flex flex-col justify-center items-center'>
                <div className={`text-white text-center p-4 opacity-0 ${isAnimated ? 'animate-fadeIn' : ''}`} >
                    <div className='font-Bold text-7xl gradient'>Snow's watchful eye.</div>
                    
                    <div className='font-Gilroy font-bold text-xs flex justify-center items-center smol-gradient'> 
                        <div className='border-t-2 border-white w-1/12 mx-2' />
                        Mountain Guardian
                    </div>
                </div>
                <div className={`mt-3 ${isAnimated ? 'animate-fadeInDelayed' : ''}`}>
                    <button 
                        className='rounded-full shadow outline px-4 py-1.5 text-white text-xs  font-semibold mx-2 hover:bg-white hover:text-black font-Gilroy'
                        
                    >   Explore
                    </button>
                    {/* <button 
                        className='rounded-full shadow bg-white px-4 py-1.5 text-black text-xs  font-semibold mx-2 hover:bg-gray-200'
                        style={{fontFamily: "Lato"}}
                    >   Sign Up
                    </button> */}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;
