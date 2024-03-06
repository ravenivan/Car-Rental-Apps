import React, { useEffect, useState } from 'react';
import axios from "axios";
import Model from './ui/Model';
import ModelSkeleton from './ui/ModelSkeleton';

const VehicleModels = ( { carModels, setCarModels, setBookingOpen, setSelectedModel }) => {
    const [sort, setSort] = useState("");

    function sortModels() {
        if (sort === "HIGH_TO_LOW") {
            setCarModels(carModels.slice().sort((a, b) => b.per_day_price - a.per_day_price));
        }
        if (sort === "LOW_TO_HIGH") {
            setCarModels(carModels.slice().sort((a, b) => a.per_day_price - b.per_day_price));
        } 
        if (sort === "RATING") {
            setCarModels(carModels.slice().sort((a, b) => b.rating - a.rating));
        }
        
    }

    useEffect(() => {
        sortModels();
    }, [sort])

    return (
        <section id="models">
            <div className="container">
                <div className="row models__row">
                    <div className="models__header">
                        <h2 className="models__header__title">
                            Vehicle Models
                        </h2>
                        <select value={sort} className="models__header__sort" onChange={(event) => setSort(event.target.value)}>
                            <option value="" disabled className="models__header__sort__option">
                                Sort
                            </option>
                            <option value="HIGH_TO_LOW" className="models__header__sort__option">
                                Price (High to Low)
                            </option>
                            <option value="LOW_TO_HIGH" className="models__header__sort__option">
                                Price (Low to High)
                            </option>
                            <option value="RATING" className="models__header__sort__option">
                                Rating
                            </option>
                        </select>
                    </div>
                    <div className="models__list">
                        { carModels.length > 0 
                            ? carModels.map((model) => <Model model={model} key={model.id} setBookingOpen={setBookingOpen} setSelectedModel={setSelectedModel} />)
                            : new Array(20).fill(0).map((_,index) => <ModelSkeleton key={index} />)
                        };
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VehicleModels;
