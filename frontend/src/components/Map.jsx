import React, {useState, useMemo, useRef} from 'react';
import { Link } from 'react-router-dom';
import {GoogleMap, useLoadScript, Marker, OverlayView, InfoWindow} from "@react-google-maps/api"
import Search from './Search';
import Modal from './Modal';
import logo from '../assets/Logo.svg';

const LIBRARIES = ["places"];
const INFO_OPTIONS = { closeBoxURL: '', enableEventPropagation: true};

const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
        libraries: LIBRARIES
    });

    /* @Note
    ** Upon zoom the entire GoolgleMap component re(lazy)loads thus 
    ** we need to memoise the center
    */
    const center = useMemo(() => ({lat: 30.73, lng: 76.77}) , []);
    const markerRef = useRef(null);
    const [latitude, setLatitude] = useState(30.73);
    const [longitude, setLongitude] = useState(76.77);
    const [openModal, setOpenModal] = useState(false);
    const [zoom, setZoom] = useState(5);

    /* Todo: 
    ** I. Search API Integration (use-places-autocomplete library)
    **     1. Map re-center and zoom (with animation)
    **     2. Marker Info-Window 
    ** 
    ** II. Report Generation (Report drawer from bottom) *Tough ;-;
    **    1. Sliding drawer from bottom up asynchronously when Find is pressed
    **    2. Contains satellite images, graphs for all the variables (temp, pressure etc.)
    ** 
    ** III. Dashboard - Idk tf we will have here but it just sounds cool
    ** IV. Polygon Tool
    ** V. OnDrag glitches of Modal
    */

    /* Future Scope:
    ** I. HeatMaps
    ** II. Search and report history
    ** III. Site specific loader and tutorial tabs
    */

    const handleMapClick = (e) => {
        if (openModal){
            setOpenModal(false);
        }

        setLatitude(e.latLng.lat());
        setLongitude(e.latLng.lng());
    };

    if (!isLoaded){
        return <div>Loading...</div>
    }

    return (
      <div className='relative bg-black'>
        <div className= {'z-0'}>  
            <GoogleMap
                zoom={zoom}
                center={center}
                mapContainerClassName="map-container"
                onClick={handleMapClick}
                options={{
                    fullscreenControl: false,
                    mapTypeControlOptions: {
                        position: 6.0, 
                        mapTypeIds: [
                            "roadmap",
                            "satellite",
                            "hybrid",
                          ]}
                }}
            >   
                <InfoWindow
                    position={{lat: latitude, lng: longitude}}
                    options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
                    >
                    <div className='text-black text-xs font-normal font-sans'>Info Window</div>
                </InfoWindow>
                <Marker
                    ref={markerRef}
                    position={{lat: latitude, lng: longitude}}
                    onClick={() => setOpenModal(true)}
                />
                <OverlayView 
                    position={{lat: latitude, lng: longitude}}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                    <Modal 
                        isModalOpen={openModal}
                        setModalState={setOpenModal} 
                        coords={[latitude, longitude]}
                    />
                </OverlayView>
            </GoogleMap>
        </div>
        <Link to="/"> 
            <img 
                className='z-1 h-12 absolute top-6 left-10 bg-black rounded-lg py-2 px-3 shadow'
                src={logo}
                >
            </img>
        </Link>
        <Search />
      </div>
    );
};

export default Map;