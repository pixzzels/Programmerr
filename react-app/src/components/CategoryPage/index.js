import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadServices } from '../../store/service';
import NavBar from '../NavBar';
import ServiceCard from '../ServiceCard';
import './CategoryPage.css';


function CategoryPage() {
    const dispatch = useDispatch();

    const services = useSelector(state => state.service.services)

    useEffect(() => {
        dispatch(loadServices())
    }, [dispatch])
    
    if (!services) return null

    return (
        <>
            <NavBar />
            <div className="homepage_container">
                <h3 style={{paddingLeft:"18px"}}>Editors Picks'</h3>
                <div className="services-container">
                    {services && services.map((service => {
                        return (
                            <ServiceCard service={service} key={service.id}/>
                        )
                    }))}
                </div>
            </div>
        </>
    )
}

export default CategoryPage;