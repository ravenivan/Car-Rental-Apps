import React, { useState, useEffect } from 'react';
import ModelHero from '../components/ModelHero';
import VehicleModels from '../components/VehicleModels';
import ModelSkeleton from '../components/ui/ModelSkeleton';
import Booking from '../components/Booking';
import axios from 'axios';
import SuccessPopup from '../components/ui/SuccessPopup';

const Models = () => {
    const [carModels, setCarModels] = useState([]);
    const [bookingOpen, setBookingOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState("");

    async function fetchModels() {
        const { data } = await axios.get("https://car-rental-api.up.railway.app/car");
        const models = data.data;

        setCarModels(models);
    }
    
    useEffect(() => {
        fetchModels();  
    }, [])

    return (
        <>
            <SuccessPopup 
                successOpen={successOpen}
                setSuccessOpen={setSuccessOpen}
            />
            <Booking 
                carModels={carModels} 
                bookingOpen={bookingOpen} 
                setBookingOpen={setBookingOpen} 
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                successOpen={successOpen}
                setSuccessOpen={setSuccessOpen}
            />
            <ModelHero />
            <VehicleModels 
                carModels={carModels}  
                setCarModels={setCarModels}
                setBookingOpen={setBookingOpen} 
                setSelectedModel={setSelectedModel}
                setSuccessOpen={setSuccessOpen}
            />
        </>
    );
}

export default Models;
