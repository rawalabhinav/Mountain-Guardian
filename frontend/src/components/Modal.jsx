import React, {useState, useEffect} from 'react';
import { CircularProgress } from '@mui/material';

const Modal = ({isModalOpen, setModalState, coords}) => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [latitude,  longitude] = coords;
    
    useEffect(() => {
        setIsTextVisible(false);
    }, [latitude, longitude]);

    const handleClick = async (e) => {
        e.stopPropagation();
        // e.preventDefault();
        setOpen(true);

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
                setMessage(`There is a ${data.result}% chance that an avalanche might occur in the next 10 days!`)
                
            } else {
                setMessage("Failed to predict");
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage("Some error occured, please try again!");
        }
        
        setIsTextVisible(true);
        setOpen(false);
    };


    if (!isModalOpen) return null;
    if (isTextVisible){
        return (
            <div 
                className="z-1 absolute text-xs text-black bg-white shadow-lg text-center w-52 mt-1 p-3 rounded-md" 
            >
            {message}
            </div>
        );
    }

    return (
    <div 
        className="z-1 absolute text-xs text-black bg-white shadow-md text-center w-52 mt-1 rounded-md" 
    >   
        {open ?
            (<div className='m-3'>
                <p className='my-3'>Hang tight, we're working on it! </p>
                <CircularProgress />
            </div>):
            
            (<>
                <p className='m-3'>Find the chances of avalanche here in the next ten days </p>
                <div className="flex items-center justify-center mb-4">
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mx-2 py-2 px-4 rounded"
                        onClick={handleClick}
                    >
                        Find
                    </button>
                    <button 
                        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold mx-2 py-2 px-4 rounded"
                        onClick={(e) => {
                            e.stopPropagation();
                            setModalState(false)}
                        }
                    >
                        Cancel
                    </button>
                </ div>
            </>)
        }
    </div>
    );
}

export default Modal;