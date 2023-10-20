import React, {useState, useEffect, useCallback, useRef} from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"

const Search = () => {
    return (
    <div className='z-1 absolute top-6 inset-x-1/2 transform -translate-x-1/2 w-1/4'>
        <form className='relative'>  
            <label htmlFor="Search"></label> 
            <input 
                type="text" 
                id="Search"
                className="shadow-md h-12 w-full pl-4 pr-10 py-1.5 text-base absolute left-0 bg-white rounded-lg focus:outline-none hover:bg-gray-200 focus:bg-white placeholder-gray-600" 
                placeholder="Search" 
            />
            <div 
                className="absolute right-2 top-2 text-gray-400 focus:outline-none hover:text-gray-600 "
            >
                <SearchIcon />
            </div>
        </form>
    </div>
    );
}

export default Search;