import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { CircularProgress } from '@mui/material';

const Home = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [result, setResult] = useState(null);
    const [open, setOpen] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setOpen(true);
        if (latitude === "" || longitude === "") {

            setMessage("PLEASE FILL THE INPUT FIELDS");
        } else {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ latitude, longitude }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setResult(data.result);
                    setMessage(`There is a ${data.result}% chance that an avalanche might occur in the next 10 days`)
                } else {
                    setMessage("Failed to predict");
                }
            } catch (error) {
                console.error('Error:', error);
                setMessage("Some error occured, please try again!");
            }
        }
        setOpen(false);
        setIsTextVisible(true);
    };
    return (
        <div className="bg-cover bg-opacity-50" style={{ backgroundImage: 'url("https://free4kwallpapers.com/uploads/originals/2015/10/12/avalanche-wallpaper.jpg")' }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-md w-full">
                    <div className="mb-8 p-2">
                        <h1 className="text-4xl font-bold mb-2">Mountain Guardian</h1>
                        <p className="text-gray-600">Protect your loved ones with a visit to our site</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg mb-4">
                        <p>
                            Please input the geographical coordinates for the location where you would like to anticipate the possibility of an avalanche occurrence.
                        </p>
                    </div>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="latitude" className="block text-gray-600 text-sm font-medium mb-2">Latitude (°N)</label>
                            <input
                                type="number"
                                id="latitude"
                                name="latitude"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="Enter latitude"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                                onClick={() => setIsTextVisible(false)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="longitude" className="block text-gray-600 text-sm font-medium mb-2">Longitude (°E)</label>
                            <input
                                type="number"
                                id="longitude"
                                name="longitude"
                                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                placeholder="Enter longitude"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                                onClick={() => setIsTextVisible(false)}
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={handleFormSubmit}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            Submit
                        </button>
                    </form>
                    {isTextVisible && (
                        <div className="bg-grey-100 p-4 rounded-lg mt-4">
                            <p className="text-lg text-black-700">
                                {message}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
