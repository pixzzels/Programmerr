import React, { useEffect, useState } from 'react';
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import {
    loadProgramingLanguages, updateOverviewService, updateBasicPackage, updateStandardPackage,
    updatePremiumPackage, loadServiceEdit, updateServiceDescription, setServicePublish, updateServiceImage
} from '../../store/service';
import NavBar from '../NavBar';

import './EditService.css';
import './Pricing.css';
import './Description.css';
import './Requirements.css';




function EditService() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const programmingLangs = useSelector(state => state.service.programmingLangs)
    const categories = useSelector(state => state.category.categories)
    const userService = useSelector(state => state.service.editService)

    // overview
    const [content, setContent] = useState('pricing')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState()
    const [serviceLang, setServiceLang] = useState()
    const [refresh, setRefresh] = useState(false);

    // pricing
    const [multiplePackages, setMutliplePackages] = useState(true);

    const [basicTitle, setBasicTitle] = useState('')
    const [standardTitle, setStandardTitle] = useState('')
    const [premiumTitle, setPremiumTitle] = useState('')

    const [basicDescription, setBasicDescription] = useState('')
    const [standardDescription, setStandardDescription] = useState('')
    const [premiumDescription, setPremiumDescription] = useState('')

    const [basicDelivery, setBasicDelivery] = useState(0)
    const [standardDelivery, setStandardDelivery] = useState(0)
    const [premiumDelivery, setPremiumDelivery] = useState(0)

    const [basicPages, setBasicPages] = useState(0)
    const [standardPages, setStandardPages] = useState(0)
    const [premiumPages, setPremiumPages] = useState(0)

    const [basicDesignCustom, setBasicDesignCustom] = useState(false)
    const [standardDesignCustom, setStandardDesignCustom] = useState(false)
    const [premiumDesignCustom, setPremiumDesignCustom] = useState(false)

    const [basicContentUpload, setBasicContentUpload] = useState(false)
    const [standardContentUpload, setStandardContentUpload] = useState(false)
    const [premiumContentUpload, setPremiumContentUpload] = useState(false)

    const [basicResponsiveDesign, setBasicResponsiveDesign] = useState(false)
    const [standardResponsiveDesign, setStandardResponsiveDesign] = useState(false)
    const [premiumResponsiveDesign, setPremiumResponsiveDesign] = useState(false)

    const [basicSourceCode, setBasicSourceCode] = useState(false)
    const [standardSourceCode, setStandardSourceCode] = useState(false)
    const [premiumSourceCode, setPremiumSourceCode] = useState(false)

    const [basicRevisions, setBasicRevisions] = useState(0)
    const [standardRevisions, setStandardRevisions] = useState(0)
    const [premiumRevisions, setPremiumRevisions] = useState(0)

    const [basicPrice, setBasicPrice] = useState('')
    const [standardPrice, setStandardPrice] = useState('')
    const [premiumPrice, setPremiumPrice] = useState('')

    // description 
    const [serviceDescription, setServiceDescription] = useState('')
    const [serviceImage, setServiceImage] = useState('')


    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    // requirements
    // const [publish, setPublish] = useState();
    const [redirect, setRedirect] = useState(false);

    const { serviceId } = useParams();
    useEffect(() => {
        dispatch(loadProgramingLanguages())
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(loadUserServices(userId))
    // }, [dispatch])

    useEffect(() => {
        dispatch(loadServiceEdit(serviceId))
    }, [dispatch])

    // prepopulate pricing 
    useEffect(() => {
        if (userService) {
            if (userService.web_package) {
                if (userService.web_package.web_basic) {
                    setBasicTitle(userService.web_package.web_basic.title)
                    setBasicDescription(userService.web_package.web_basic.description)
                    if (userService.web_package.web_basic.delivery_time === 1) {
                        setBasicDelivery(userService.web_package.web_basic.delivery_time + " Day Delivery ")
                    } else {
                        setBasicDelivery(userService.web_package.web_basic.delivery_time + " Days Delivery")
                    }
                    setBasicPages(userService.web_package.web_basic.pages)
                    setBasicDesignCustom(userService.web_package.web_basic.design_custom)
                    setBasicContentUpload(userService.web_package.web_basic.content_upload)
                    setBasicResponsiveDesign(userService.web_package.web_basic.responsive_design)
                    setBasicSourceCode(userService.web_package.web_basic.source_code)
                    setBasicRevisions(userService.web_package.web_basic.revisions)
                    setBasicPrice(userService.web_package.web_basic.price)
                }

                if (userService.web_package.web_standard) {
                    setStandardTitle(userService.web_package.web_standard.title)
                    setStandardDescription(userService.web_package.web_standard.description)
                    if (userService.web_package.web_standard.delivery_time === 1) {
                        setStandardDelivery(userService.web_package.web_standard.delivery_time + " Day Delivery ")
                    } else {
                        setStandardDelivery(userService.web_package.web_standard.delivery_time + " Days Delivery")
                    }
                    setStandardPages(userService.web_package.web_standard.pages)
                    setStandardDesignCustom(userService.web_package.web_standard.design_custom)
                    setStandardContentUpload(userService.web_package.web_standard.content_upload)
                    setStandardResponsiveDesign(userService.web_package.web_standard.responsive_design)
                    setStandardSourceCode(userService.web_package.web_standard.source_code)
                    setStandardRevisions(userService.web_package.web_standard.revisions)
                    setStandardPrice(userService.web_package.web_standard.price)
                }

                if (userService.web_package.web_premium) {
                    if (userService.web_package.web_premium.delivery_time === 1) {
                        setPremiumDelivery(userService.web_package.web_premium.delivery_time + " Day Delivery ")
                    } else {
                        setPremiumDelivery(userService.web_package.web_premium.delivery_time + " Days Delivery")
                    }
                    setPremiumTitle(userService.web_package.web_premium.title)
                    setPremiumDescription(userService.web_package.web_premium.description)
                    setPremiumPages(userService.web_package.web_premium.pages)
                    setPremiumDesignCustom(userService.web_package.web_premium.design_custom)
                    setPremiumContentUpload(userService.web_package.web_premium.content_upload)
                    setPremiumResponsiveDesign(userService.web_package.web_premium.responsive_design)
                    setPremiumSourceCode(userService.web_package.web_premium.source_code)
                    setPremiumRevisions(userService.web_package.web_premium.revisions)
                    setPremiumPrice(userService.web_package.web_premium.price)
                    setMutliplePackages(!multiplePackages)
                }
            }
            if (userService.description) {
                setServiceDescription(userService.description)
            }

            if (userService.listing_img) {
                setServiceImage(userService.listing_img)
            }
        }
    }, [userService])

    if (redirect) {
        return <Redirect to={`/profile`} />
    }

    const daysDelivery = ["1 Day Delivery ", "2 Days Delivery", "3 Days Delivery", "4 Days Delivery", "5 Days Delivery", "6 Days Delivery", "7 Days Delivery", "8 Days Delivery", "9 Days Delivery", "10 Days Delivery", "14 Days Delivery", "21 Days Delivery", "30 Days Delivery", "45 Days Delivery", "60 Days Delivery", "75 Days Delivery", "90 Days Delivery"]

    const numberOfPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleOverviewSubmit = () => {
        if (!category) {
            document.getElementById("category-error").innerHTML = " * Please select a category"
        } else {
            document.getElementById("category-error").innerHTML = ""
        }

        if (title.length < 15) {
            document.getElementById("title-error").innerHTML = " * Please enter a title more than 15 characters"
        } else {
            document.getElementById("title-error").innerHTML = ""
        }

        let programmingLang;
        function displayRadioValue() {
            var ele = document.getElementsByName('programming-language');
            for (let i = 0; i < ele.length; i++) {
                if (ele[i].checked) {
                    // console.log(ele[i].value)
                    programmingLang = ele[i].value
                }
            }
        }
        displayRadioValue()

        if (!programmingLang) {
            document.getElementById("programmingLang-error").innerHTML = " * Please select a programming language, choose 'Not Defined' if not applicable"
        } else {
            document.getElementById("programmingLang-error").innerHTML = ""
        }


        if (programmingLang && category && title.length > 15) {
            const categoryId = parseInt(category)
            const userTitle = "I will " + title
            const serviceId = userService.id
            // console.log(serviceId)

            dispatch(updateOverviewService({ userTitle, categoryId, programmingLang, userId, serviceId }))
            setContent('pricing')
        }
        // console.log("title", title, "category", category, "prgramminglang", programmingLang)
    }

    const handlePricingSubmit = (e) => {
        e.preventDefault()
        const serviceId = userService.id
        const dayDelivery = parseInt(basicDelivery.slice(0, 1))
        let sdayDelivery;
        let pdayDelivery;

        dispatch(updateBasicPackage({
            basicTitle, basicDescription, dayDelivery, basicPages, basicDesignCustom,
            basicContentUpload, basicResponsiveDesign, basicSourceCode, basicRevisions, basicPrice, serviceId
        }))

        if (!multiplePackages) {
            sdayDelivery = parseInt(standardDelivery.slice(0, 1))
            pdayDelivery = parseInt(premiumDelivery.slice(0, 1))
            dispatch(updateStandardPackage({
                standardTitle, standardDescription, sdayDelivery, standardPages, standardDesignCustom,
                standardContentUpload, standardResponsiveDesign, standardSourceCode, standardRevisions, standardPrice, serviceId
            }))

            dispatch(updatePremiumPackage({
                premiumTitle, premiumDescription, pdayDelivery, premiumPages, premiumDesignCustom,
                premiumContentUpload, premiumResponsiveDesign, premiumSourceCode, premiumRevisions, premiumPrice, serviceId
            }))
        }
        setContent('description')
    }

    const handleDescriptionSubmit = (e) => {
        e.preventDefault();
        dispatch(updateServiceDescription({ serviceDescription, serviceId }))
        setContent('requirements')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);
        const info = {
            image,
            serviceId
        }

        const res = await dispatch(updateServiceImage(info))
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            history.push(`/new-service/edit/${serviceId}`);
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleServicePublish = () => {
        const publish = true
        dispatch(setServicePublish({ publish, serviceId }))
        setRedirect(true)
    }

    if (!userService) return null;
    if (!refresh && title === '' && !category) {
        setTitle(userService.title.slice(7))
        // const test = document.getElementById("programmingLang-" + userService.service_language_id)
        // console.log("test", "programmingLang-" + userService.service_language_id)
        setCategory(userService.category_id)
        setServiceLang(userService.service_language_id)
        setRefresh(true)
    }

    let component;
    if (content === 'overview') {
        component =
            <div className="new-service__overview-wrapper">
                <div className="new-service__header">Overview</div>
                <div className="new-service__overview-content">

                    <div className="new-service__overview-small-container">
                        <label className="overview__label" htmlFor="gig-title">GIG TITLE</label>
                        <span className="overview__gig-title-pre">I will</span>
                        <textarea
                            className="overview__gig-title-input"
                            name="gig-title"
                            maxLength="80"
                            value={title}
                            placeholder="do something I'm really good at"
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <footer className="overview__gig-title-footer">
                        <div className="new-service__chara-count">
                            <div id="title-error" className="error-message" style={{ float: "left" }}></div>

                            {title.length + "/80 max"}

                        </div>
                    </footer>


                    <div className="new-service__overview-small-container">
                        <label className="overview__label" htmlFor="gig-category">CATEGORY</label>
                        <select
                            className="overview__gig-category-select"
                            name="gig-category"
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">SELECT A CATEGORY</option>
                            {categories && categories.map((category => {
                                return (
                                    <option value={category.id} key={category.id}
                                        selected={userService.category_id === category.id ? true : false}
                                    >
                                        {(category.name).toUpperCase()}</option>
                                )
                            }))
                            }

                        </select>
                        <div id="category-error" className="error-message"></div>
                    </div>

                    <div className="new-service__overview-small-container">
                        <label className="overview__label" htmlFor="gig-programming-lang">GIG METADATA</label>
                        <div className="overview__megadata-container">
                            <div className="overview__megadata-titles">
                                <div className="overview__megadata-title">PROGRAMMING LANGUAGE</div>
                                <div className="overview__megadata-title-1"></div>
                            </div>
                            <div className="overview__megadata-programming-lang-options">
                                <div style={{
                                    marginLeft: "10px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    marginBottom: "15px",
                                    paddingTop: "16px"
                                }}
                                >Select the language you provide services for</div>
                                <div id="programmingLang-error" className="error-message"></div>

                                {programmingLangs && programmingLangs.map((language => {
                                    return (
                                        <>
                                            <div className="overview__megadata-programming-lang-option" key={language.id}>
                                                <input style={{ marginRight: "10px" }} type="radio" name="programming-language" id={"programmingLang-" + language.id} value={language.id}
                                                    checked={serviceLang === language.id ? true : false}
                                                    onClick={() => setServiceLang(language.id)}
                                                >
                                                </input>
                                                <label htmlFor={language.name}>{language.name}</label>
                                                <br></br>
                                            </div>
                                        </>
                                    )
                                }))
                                }
                            </div>
                        </div>
                    </div>

                    <footer className="overview__gig-title-footer">
                        <button className="new-service__overview-btn-submit"
                            onClick={handleOverviewSubmit}
                        >Save & Continue</button>
                    </footer>

                </div>
            </div>
    }

    if (content === 'pricing') {
        component =
            <>
                <div className="new-service__pricing-wrapper">

                    <div className="new-service__header-pricing-container">
                        <div className="new-service__header">Scope & Pricing</div>
                        <div>
                            <span style={{ marginRight: "10px" }}>3 Packages</span>

                            <label className="switch">
                                <input type="checkbox"
                                    onClick={(e) => setMutliplePackages(!e.target.checked)}
                                ></input>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div className="new-service__pricing-content">
                        <div className="nsp-empty nsp-col-1"></div>
                        <div className="nsp new-service_package-pages nsp-col-1 nsp-row5">Number of Pages</div>
                        <div className="nsp new-service_package-design-customization nsp-col-1 nsp-row6">Design Customization</div>
                        <div className="nsp new-service_package-content-upload nsp-col-1 nsp-row7">Content Upload</div>
                        <div className="nsp new-service_package-responsive-design nsp-col-1 nsp-row8">Responsive Design</div>
                        <div className="nsp new-service_package-source-code nsp-col-1 nsp-row9">Include Source Code</div>
                        <div className="nsp new-service_package-revisions nsp-col-1 nsp-row10">Revisions</div>
                        <div className="nsp new-service_package-price nsp-col-1 nsp-row11 ">Price</div>

                        <div className="nsp new-service__package-basic nsp-col-2 nsp-row1">BASIC</div>
                        <div className="nsp package-basic-title nsp-col-2 nsp-row2">
                            <div className="error-star"></div>
                            <textarea
                                className="package-textarea"
                                placeholder="Name your package"
                                value={basicTitle}
                                onChange={(e) => setBasicTitle(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-basic-description nsp-col-2 nsp-row3">
                            <textarea
                                className="package-textarea"
                                placeholder="Describe the details of what you're offering"
                                value={basicDescription}
                                onChange={(e) => setBasicDescription(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-basic-delivery nsp-col-2 nsp-row4">
                            <select
                                className="package-select"
                                onChange={(e) => setBasicDelivery(e.target.value)}
                                required
                            >
                                <option value="" >Delivery Time</option>

                                {daysDelivery.map((day) => {
                                    return (
                                        <option className="package-select-option" key={day} value={day}
                                            selected={basicDelivery === day ? true : false}
                                        >{day}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="nsp package-basic-pages nsp-col-2 nsp-row5">
                            <select
                                className="package-select"
                                onChange={(e) => setBasicPages(e.target.value)}
                            >
                                <option value="" defaultValue>Select</option>

                                {numberOfPages.map((page) => {
                                    return (
                                        <>
                                            <option className="package-select-option" key={page} value={page}
                                                selected={basicPages === page ? true : false}
                                            >{page}</option>
                                        </>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="nsp package-basic-design-customization nsp-col-2 nsp-row6 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={basicDesignCustom}
                                onClick={(e) => setBasicDesignCustom(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-content-upload nsp-col-2 nsp-row7 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={basicContentUpload}
                                onClick={(e) => setBasicContentUpload(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-responsive-design nsp-col-2 nsp-row8 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={basicResponsiveDesign}
                                onClick={(e) => setBasicResponsiveDesign(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-source-code nsp-col-2 nsp-row9 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={basicSourceCode}
                                onClick={(e) => setBasicSourceCode(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-revisions nsp-col-2 nsp-row10">
                            <select
                                className="package-select"
                                onChange={(e) => setBasicRevisions(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option className="package-select-option" value={0}
                                    selected={basicRevisions === 0 ? true : false}>0</option>
                                <option className="package-select-option" value={1}
                                    selected={basicRevisions === 1 ? true : false}>1</option>
                                <option className="package-select-option" value={2}
                                    selected={basicRevisions === 2 ? true : false}>2</option>
                                <option className="package-select-option" value={3}
                                    selected={basicRevisions === 3 ? true : false}>3</option>
                                <option className="package-select-option" value={4}
                                    selected={basicRevisions === 4 ? true : false}>4</option>
                                <option className="package-select-option" value={5}
                                    selected={basicRevisions === 5 ? true : false}>5</option>
                                <option className="package-select-option" value={6}
                                    selected={basicRevisions === 6 ? true : false}>6</option>
                                <option className="package-select-option" value={7}
                                    selected={basicRevisions === 7 ? true : false}>7</option>
                                <option className="package-select-option" value={8}
                                    selected={basicRevisions === 8 ? true : false}>8</option>
                                <option className="package-select-option" value={9}
                                    selected={basicRevisions === 9 ? true : false}>9</option>
                                <option className="package-select-option" value={888}
                                    selected={basicRevisions === 888 ? true : false}>Unlimited</option>
                            </select>
                        </div>
                        <div className="nsp package-basic-price nsp-col-2 nsp-row11 package-price-input-wrap">
                            <input
                                className="package-price-input"
                                type="number"
                                name="price"
                                min="5"
                                max="10000"
                                step="5"
                                value={basicPrice}
                                onChange={(e) => setBasicPrice(e.target.value)}
                            >
                            </input>
                            <label htmlFor="price">$</label>
                        </div>

                        {multiplePackages &&
                            <>
                                <div className="greyed-out"></div>
                            </>
                        }
                        <div className="nsp new-service__package-standard nsp-col-3 nsp-row1">STANDARD</div>
                        <div className="nsp package-standard-title nsp-col-3 nsp-row2">
                            <textarea
                                //readOnly={multiplePackages} 
                                className="package-textarea"
                                placeholder="Name your package"
                                value={standardTitle}
                                onChange={(e) => setStandardTitle(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-standard-description nsp-col-3 nsp-row3">
                            <textarea
                                //readOnly={multiplePackages} 
                                className="package-textarea"
                                placeholder="Describe the details of what you're offering"
                                value={standardDescription}
                                onChange={(e) => setStandardDescription(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-standard-delivery nsp-col-3 nsp-row4">
                            <select
                                //disabled={multiplePackages} 
                                className="package-select"
                                onChange={(e) => setStandardDelivery(e.target.value)}
                            >
                                <option value="" defaultValue>Delivery Time</option>

                                {daysDelivery.map((day) => {
                                    return (
                                        <>
                                            <option key={day} value={day}
                                                selected={standardDelivery === day ? true : false}

                                            >{day}</option>
                                        </>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="nsp package-standard-pages nsp-col-3 nsp-row5">
                            <select
                                //disabled={multiplePackages} 
                                className="package-select"
                                onChange={(e) => setStandardPages(e.target.value)}
                            >
                                <option value="" defaultValue>Select</option>

                                {numberOfPages.map((page) => {
                                    return (
                                        <>
                                            <option className="package-select-option" key={page} value={page}
                                                selected={standardPages === page ? true : false}
                                            >{page}</option>
                                        </>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="nsp package-standard-design-customization nsp-col-3 nsp-row6 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={standardDesignCustom}
                                onClick={(e) => setStandardDesignCustom(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-standard-content-upload nsp-col-3 nsp-row7 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={standardContentUpload}
                                onClick={(e) => setStandardContentUpload(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-standard-responsive-design nsp-col-3 nsp-row8 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={standardResponsiveDesign}
                                onClick={(e) => setStandardResponsiveDesign(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-standard-source-code nsp-col-3 nsp-row9 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={standardSourceCode}
                                onClick={(e) => setStandardSourceCode(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-standard-revisions nsp-col-3 nsp-row10">
                            <select
                                className="package-select"
                                onChange={(e) => setStandardRevisions(e.target.value)}
                            >
                                <option value="" defaultValue>Select</option>
                                <option className="package-select-option" value={0}
                                    selected={standardRevisions === 0 ? true : false}>0</option>
                                <option className="package-select-option" value={1}
                                    selected={standardRevisions === 1 ? true : false}>1</option>
                                <option className="package-select-option" value={2}
                                    selected={standardRevisions === 2 ? true : false}>2</option>
                                <option className="package-select-option" value={3}
                                    selected={standardRevisions === 3 ? true : false}>3</option>
                                <option className="package-select-option" value={4}
                                    selected={standardRevisions === 4 ? true : false}>4</option>
                                <option className="package-select-option" value={5}
                                    selected={standardRevisions === 5 ? true : false}>5</option>
                                <option className="package-select-option" value={6}
                                    selected={standardRevisions === 6 ? true : false}>6</option>
                                <option className="package-select-option" value={7}
                                    selected={standardRevisions === 7 ? true : false}>7</option>
                                <option className="package-select-option" value={8}
                                    selected={standardRevisions === 8 ? true : false}>8</option>
                                <option className="package-select-option" value={9}
                                    selected={standardRevisions === 9 ? true : false}>9</option>
                                <option className="package-select-option" value={888}
                                    selected={standardRevisions === 88 ? true : false}>Unlimited</option>
                            </select>
                        </div>
                        <div className="nsp package-standard-price nsp-col-3 nsp-row11 package-price-input-wrap">
                            <input
                                className="package-price-input"
                                type="number"
                                name="price"
                                min="5"
                                max="10000"
                                step="5"
                                value={standardPrice}
                                onChange={(e) => setStandardPrice(e.target.value)}
                            >
                            </input>
                        </div>


                        <div className="nsp new-service__package-premium nsp-col-4 nsp-row1">PREMIUM</div>
                        <div className="nsp package-premium-title nsp-col-4 nsp-row2">
                            <textarea
                                //readOnly={multiplePackages} 
                                className="package-textarea"
                                placeholder="Name your package"
                                value={premiumTitle}
                                onChange={(e) => setPremiumTitle(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-premium-description nsp-col-4 nsp-row3">
                            <textarea
                                //readOnly={multiplePackages} 
                                className="package-textarea"
                                placeholder="Describe the details of what you're offering"
                                value={premiumDescription}
                                onChange={(e) => setPremiumDescription(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-premium-delivery nsp-col-4 nsp-row4">
                            <select
                                //disabled={multiplePackages} 
                                className="package-select"
                                onChange={(e) => setPremiumDelivery(e.target.value)}
                            >
                                <option value="" defaultValue>Delivery Time</option>

                                {daysDelivery.map((day) => {
                                    return (
                                        <>
                                            <option key={day} value={day}
                                                selected={premiumDelivery === day ? true : false}
                                            >{day}</option>
                                        </>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="nsp package-premium-pages nsp-col-4 nsp-row5 ">
                            <select
                                //disabled={multiplePackages} 
                                className="package-select"
                                onChange={(e) => setPremiumPages(e.target.value)}
                            >
                                <option value="" defaultValue>Select</option>

                                {numberOfPages.map((page) => {
                                    return (
                                        <>
                                            <option className="package-select-option" key={page} value={page}
                                                selected={premiumPages === page ? true : false}
                                            >{page}</option>
                                        </>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="nsp package-premium-design-customization nsp-col-4 nsp-row6 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={premiumDesignCustom}
                                onClick={(e) => setPremiumDesignCustom(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-premium-content-upload nsp-col-4 nsp-row7 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={premiumContentUpload}
                                onClick={(e) => setPremiumContentUpload(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-premium-responsive-design nsp-col-4 nsp-row8 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={premiumResponsiveDesign}
                                onClick={(e) => setPremiumResponsiveDesign(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-premium-source-code nsp-col-4 nsp-row9 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                checked={premiumSourceCode}
                                onClick={(e) => setPremiumSourceCode(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-premium-revisions nsp-col-4 nsp-row10">
                            <select
                                className="package-select"
                                onChange={(e) => setPremiumRevisions(e.target.value)}
                            >
                                <option value="" defaultValue>Select</option>
                                <option className="package-select-option" value={0}
                                    selected={premiumRevisions === 0 ? true : false}>0</option>
                                <option className="package-select-option" value={1}
                                    selected={premiumRevisions === 1 ? true : false}>1</option>
                                <option className="package-select-option" value={2}
                                    selected={premiumRevisions === 2 ? true : false}>2</option>
                                <option className="package-select-option" value={3}
                                    selected={premiumRevisions === 3 ? true : false}>3</option>
                                <option className="package-select-option" value={4}
                                    selected={premiumRevisions === 4 ? true : false}>4</option>
                                <option className="package-select-option" value={5}
                                    selected={premiumRevisions === 5 ? true : false}>5</option>
                                <option className="package-select-option" value={6}
                                    selected={premiumRevisions === 6 ? true : false}>6</option>
                                <option className="package-select-option" value={7}
                                    selected={premiumRevisions === 7 ? true : false}>7</option>
                                <option className="package-select-option" value={8}
                                    selected={premiumRevisions === 8 ? true : false}>8</option>
                                <option className="package-select-option" value={9}
                                    selected={premiumRevisions === 9 ? true : false}>9</option>
                                <option className="package-select-option" value={888}
                                    selected={premiumRevisions === 888 ? true : false}>Unlimited</option>
                            </select>
                        </div>
                        <div className="nsp package-premium-price nsp-col-4 nsp-row11 package-price-input-wrap">
                            <input
                                className="package-price-input"
                                type="number"
                                name="price"
                                min="5"
                                max="10000"
                                step="5"
                                value={premiumPrice}
                                onChange={(e) => setPremiumPrice(e.target.value)}
                            >
                            </input>
                        </div>

                    </div>

                    <footer className="overview__gig-title-footer">
                        <button className="new-service__overview-btn-submit"
                            onClick={handlePricingSubmit}
                        >Save & Continue</button>
                    </footer>
                </div>
            </>

    }

    if (content === 'description') {
        component =
            <div className="new-service__description-wrapper">
                <div className="new-service__header">Description</div>
                <div className="new-service__overview-content">

                    <div className="new-service__description-small-container">
                        <label className="description__label" htmlFor="gig-description">Briefly describe your gig</label>
                        <textarea
                            className="description__gig-description-input"
                            name="gig-description"
                            maxLength="1200"
                            value={serviceDescription}
                            onChange={(e) => setServiceDescription(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <footer className="overview__gig-title-footer">
                        <div className="new-service__chara-count" style={{ marginRight: "20px", marginTop: "15px" }}>
                            <div id="title-error" className="error-message" style={{ float: "left" }}></div>
                            {serviceDescription.length + "/1200 characters"}
                        </div>
                    </footer>

                </div>

                <footer className="overview__gig-title-footer">
                    <button className="new-service__overview-btn-submit"
                        onClick={handleDescriptionSubmit}
                    >Save & Continue</button>
                </footer>

            </div>
    }

    if (content === 'requirements') {
        component =
            <div className="new-service__requirements-wrapper">
                <div className="new-service__header">Showcase your Services In A Gig Gallery</div>
                <div className="new-service__image-wrapper">

                    <div className="new-service__image-container">
                        {serviceImage &&
                            <img className="new-service__image" src={serviceImage}></img>
                        }
                        {!serviceImage &&
                            <label className="custom-file-upload new-service__image-upload" htmlFor="file-upload">Click to upload image</label>
                        }
                    </div>
                    <div style={{display:"flex", flexDirection:"column", marginLeft:'15px'}}>
                        {serviceImage &&
                            <label className="custom-file-upload new-service__image-change" htmlFor="file-upload">Change Image</label>
                        }
                        <form onSubmit={handleSubmit}>
                            <input
                                id="file-upload"
                                className="new-service__image-input hidden"
                                type="file"
                                accept="image/*"
                                placeholder="choose an image"
                                onChange={updateImage}
                            />
                            <button className="new-service__image-submit-btn" type="submit">Save Image</button>
                            {(imageLoading) && <p>Loading...</p>}
                        </form>
                        {/* <div>(click save and refresh to see your new photo)</div> */}
                    </div>
                </div>

                <footer className="overview__gig-title-footer" style={{marginTop:'100px'}}>
                    <button className="new-service__overview-btn-submit"
                        onClick={handleServicePublish}
                    >Publish!
                    </button>
                    <NavLink className="card__link" to="/profile">
                        <button className="new-service__overview-btn-submit" style={{ marginRight: "15px" }}>Save & Return</button>
                    </NavLink>
                </footer>

            </div>
    }

    return (

        <>
            <NavBar showCategory={false} />
            <div className="new-service__navbar-wrapper">

                <nav className="new-service__navbar">
                    <div className="new-service__navbar-list"
                        onClick={() => setContent('overview')}
                        style={content === 'overview' ? { color: "#1DBF73" } : {}}
                    >Overview</div>
                    <div className="new-service__navbar-list"
                        onClick={() => setContent('pricing')}
                        style={content === 'pricing' ? { color: "#1DBF73" } : {}}
                    >Pricing</div>
                    <div className="new-service__navbar-list"
                        onClick={() => setContent('description')}
                        style={content === 'description' ? { color: "#1DBF73" } : {}}
                    >Description</div>
                    <div className="new-service__navbar-list"
                        onClick={() => setContent('requirements')}
                        style={content === 'requirements' ? { color: "#1DBF73" } : {}}
                    >Requirements</div>
                </nav>

            </div>
            {component}
        </>
    )
};

export default EditService;