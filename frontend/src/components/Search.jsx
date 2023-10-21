import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";

const Search = () => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const [focused, setFocused] = useState(false);

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        console.log("hello");
    
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        // setSelected({ lat, lng });
    };

    return (
    <div className='z-1 absolute top-6 inset-x-1/2 transform -translate-x-1/2 w-1/4'>
        <div className='relative h-12'>  
            <input 
                type="text" 
                className="shadow-md h-full w-full pl-4 pr-10 py-1.5 text-sm absolute left-0 bg-white rounded-xl placeholder-gray-600 focus:bg-white focus:outline-none focus:rounded-b-none focus:shadow-sm" 
                placeholder="Search" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <div 
                className="absolute h-full flex items-center right-0 pr-2  text-gray-400 focus:outline-none hover:text-gray-600 "
            >
                <SearchIcon fontSize='small'/>
            </div>
        </div>

        {focused ? <div className='shadow-lg py-2 w-full text-gray-700 bg-white rounded-b-xl'>
            {status === "OK" && data.map(({id, description}) => (
                <div 
                    className='w-full h-12 flex justify-start items-center hover:bg-gray-100 cursor-pointer'
                    key={id}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(description)}}
                >
                    <div className="pl-4 pr-4 mb-1">
                        <PlaceIcon style={{fontSize: 20, color:'rgb(107 114 128)'}}/>
                    </div>
                    <div className='text-sm py-3 pr-4 truncate'> {description} </div>
                </div>
            ))}

            <div className='w-full h-12 flex justify-start items-center hover:bg-gray-100 rounded-b-xl cursor-pointer'>
                <div className="pl-4 pr-4 mb-1">
                    <MyLocationIcon style={{fontSize: 20, color:'rgb(107 114 128)'}}/>
                </div>
                <div className='text-sm py-3 pr-4 truncate'> Locate me </div>
            </div>
        </div> : null}
    </div>
    );
}

export default Search;