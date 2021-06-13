import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadServices } from '../../store/service';
import { loadCategories } from '../../store/category';
import NavBar from '../NavBar';
import ServiceCard from '../ServiceCard';
import './CategoryPage.css';


function CategoryPage() {
    const dispatch = useDispatch();
    const services = useSelector(state => state.service.services)
    const categories = useSelector(state => state.category.categories)

    const [catName, setCatName] = useState();

    useEffect(() => {
        dispatch(loadServices())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadCategories())
    }, [dispatch])


    const { id } = useParams();
    const catId = parseInt(id);

    useEffect(() => {
        if (categories) {
            // console.log(categories)
            
            categories.map((category) => {
                if (category.id === catId) {
                    setCatName(category.name)
                }
            })
        }

        // console.log("category", catName)

    })
    if (!services) return null;
    if (!categories) return null;


    return (
        <>
            <NavBar />
            <div className="homepage_container">
                <h3 style={{ paddingLeft: "18px" }}>{catName}</h3>
                <div className="services-container">
                    {services && services.map((service => {
                        if (service.category_id === catId) {
                            return (
                                <ServiceCard service={service} key={service.id} />
                            )
                        }
                    }))}
                </div>
            </div>
        </>
    )
}

export default CategoryPage;