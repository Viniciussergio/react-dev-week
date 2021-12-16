import React, {useState, useEffect, useContext} from "react";
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import Card from '../Card'
import api from '../../config/api';
import { FilterContext } from "../../contexts/FilterContext";

import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination]);

const Slider = () => {
    const {filteredPlace, setFilteredPlace} = useContext(FilterContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            const result = await api.get(`/places?category_like=${filteredPlace ? filteredPlace : ''}`);

            if (result.status === 200) {
                setPlaces(result.data);
                console.log(result.data);
                console.log(filteredPlace);
            }
        }

        fetchPlaces();
    }, [filteredPlace]);

    return (
        <Swiper
            breakpoints={{
                300: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                }
            }}
        >
            {
                places.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Card key={item.id} item={item}/>
                        </SwiperSlide>
                    ) 
                })
            }
            
        </Swiper>
    )
}

export default Slider;