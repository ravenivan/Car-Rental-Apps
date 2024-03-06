import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const SuccessPopup = ({ successOpen, setSuccessOpen }) => {

    useEffect(() => {
        setTimeout(() => {
            setSuccessOpen(false);
        }, 4000)
    }, [successOpen])

    return (
        <div className={`success ${successOpen && "success-open"}`}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <span>Ride successfully booked!</span>
        </div>
    );
}

export default SuccessPopup;
