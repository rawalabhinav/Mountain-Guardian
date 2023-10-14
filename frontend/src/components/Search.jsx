import React, {useState, useEffect, useCallback, useRef} from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"

const Search = () => {
    return (
    <div className='z-1 absolute top-2 right-2 w-1/4'>
        <form className='relative'>  
            <label htmlFor="Search"></label> 
            <input 
                type="search" 
                id="Search"
                className="shadow-md w-full pl-3 pr-10 py-1.5 text-sm absolute left-0 bg-white rounded-sm focus:outline-none hover:bg-gray-200 focus:bg-white placeholder-gray-600" 
                placeholder="Search" 
            />
            <button 
                type="submit" 
                className="absolute top-0.5 right-1 text-gray-400 focus:outline-none hover:text-gray-900 "
            >
                <SearchIcon />
            </button>
        </form>
    </div>
    );
}

export default Search;