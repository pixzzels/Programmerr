import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProgramingLanguages, updateOverviewService, loadUserServices, updateBasicPackage, updateStandardPackage, updatePremiumPackage } from '../../store/service';
import NavBar from '../NavBar';

import './EditService.css';
import './Pricing.css';


function EditService() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const programmingLangs = useSelector(state => state.service.programmingLangs)
    const categories = useSelector(state => state.category.categories)
    const userService = useSelector(state => state.service.newService)
    const services = useSelector(state => state.service)
    // console.log("services", services)
    // console.log(userServices)

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
    // const ref = useRef(null);


    // const [programmingLang, setProgrammingLang] = useState()


    useEffect(() => {
        dispatch(loadProgramingLanguages())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadUserServices(userId))
    }, [dispatch])

    const daysDelivery = [
        "1 Day Delivery ", "2 Days Delivery", "3 Days Delivery", "4 Days Delivery", "5 Days Delivery", "6 Days Delivery", "7 Days Delivery", "8 Days Delivery", "9 Days Delivery", "10 Days Delivery", "14 Days Delivery", "21 Days Delivery", "30 Days Delivery", "45 Days Delivery", "60 Days Delivery", "75 Days Delivery", "90 Days Delivery"
    ]

    const numberOfPages = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]


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
                    console.log(ele[i].value)
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

    const handlePricingSubmit = () => {
        const serviceId = userService.id
        const dayDelivery = parseInt(basicDelivery.slice(0, 1))
        const sdayDelivery = parseInt(standardDelivery.slice(0, 1))
        const pdayDelivery = parseInt(premiumDelivery.slice(0, 1))

        // console.log(dayDelivery)
        dispatch(updateBasicPackage({
            basicTitle, basicDescription, dayDelivery, basicPages, basicDesignCustom,
            basicContentUpload, basicResponsiveDesign, basicSourceCode, basicRevisions, basicPrice, serviceId
        }))

        dispatch(updateStandardPackage({
            standardTitle, standardDescription, sdayDelivery, standardPages, standardDesignCustom,
            standardContentUpload, standardResponsiveDesign, standardSourceCode, standardRevisions, standardPrice, serviceId
        }))


        dispatch(updatePremiumPackage({
            premiumTitle, premiumDescription, pdayDelivery, premiumPages, premiumDesignCustom,
            premiumContentUpload, premiumResponsiveDesign, premiumSourceCode, premiumRevisions, premiumPrice, serviceId
        }))

        setContent('description')
    }

    // if (!userServices) return null;
    // if (!programmingLangs) return null;
    // const editingService = userServices.pop();
    // console.log("editingService", editingService)
    // console.log(userService)
    if (!userService) return null;
    if (!refresh && title === '' && !category) {
        setTitle(userService.title.slice(7))
        // const test = document.getElementById("programmingLang-" + userService.service_language_id)
        // console.log("test", "programmingLang-" + userService.service_language_id)
        setCategory(userService.category_id)
        setServiceLang(userService.service_language_id)
        setRefresh(true)
    }
    // setTitle(userService.title)
    // console.log("hi")



    // const programmingLangs = services.programmingLangs
    // // const userServices = useSelector(state => state.service.userServices)
    // const userServices = services.userServices
    // if (userServices) {
    //     const userService = userServices.pop()

    //     console.log("userService", userService)
    // }

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
                            <textarea
                                className="package-textarea"
                                placeholder="Name your package"
                                onChange={(e) => setBasicTitle(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-basic-description nsp-col-2 nsp-row3">
                            <textarea
                                className="package-textarea"
                                placeholder="Describe the details of what you're offering"
                                onChange={(e) => setBasicDescription(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-basic-delivery nsp-col-2 nsp-row4">
                            <select
                                className="package-select"
                                onChange={(e) => setBasicDelivery(e.target.value)}
                            >
                                <option value="" defaultValue>Delivery Time</option>

                                {daysDelivery.map((day) => {
                                    return (
                                        <option className="package-select-option" key={day} value={day}>{day}</option>
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
                                            <option className="package-select-option" key={page} value={page}>{page}</option>
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
                                onClick={(e) => setBasicDesignCustom(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-content-upload nsp-col-2 nsp-row7 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                onClick={(e) => setBasicContentUpload(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-responsive-design nsp-col-2 nsp-row8 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                onClick={(e) => setBasicResponsiveDesign(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-source-code nsp-col-2 nsp-row9 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                onClick={(e) => setBasicSourceCode(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-basic-revisions nsp-col-2 nsp-row10">
                            <select
                                className="package-select"
                                onChange={(e) => setBasicRevisions(e.target.value)}
                            >
                                <option value="" defaultValue>Select</option>
                                <option className="package-select-option" value={0}>0</option>
                                <option className="package-select-option" value={1}>1</option>
                                <option className="package-select-option" value={2}>2</option>
                                <option className="package-select-option" value={3}>3</option>
                                <option className="package-select-option" value={4}>4</option>
                                <option className="package-select-option" value={5}>5</option>
                                <option className="package-select-option" value={6}>6</option>
                                <option className="package-select-option" value={7}>7</option>
                                <option className="package-select-option" value={8}>8</option>
                                <option className="package-select-option" value={9}>9</option>
                                <option className="package-select-option" value={888}>Unlimited</option>
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
                                onChange={(e) => setStandardTitle(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-standard-description nsp-col-3 nsp-row3">
                            <textarea
                                //readOnly={multiplePackages} 
                                className="package-textarea"
                                placeholder="Describe the details of what you're offering"
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
                                            <option key={day} value={day}>{day}</option>
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
                                            <option className="package-select-option" key={page} value={page}>{page}</option>
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
                                onClick={(e) => setStandardDesignCustom(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-standard-content-upload nsp-col-3 nsp-row7 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                onClick={(e) => setStandardContentUpload(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-standard-responsive-design nsp-col-3 nsp-row8 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                onClick={(e) => setStandardResponsiveDesign(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-standard-source-code nsp-col-3 nsp-row9 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
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
                                <option className="package-select-option" value={0}>0</option>
                                <option className="package-select-option" value={1}>1</option>
                                <option className="package-select-option" value={2}>2</option>
                                <option className="package-select-option" value={3}>3</option>
                                <option className="package-select-option" value={4}>4</option>
                                <option className="package-select-option" value={5}>5</option>
                                <option className="package-select-option" value={6}>6</option>
                                <option className="package-select-option" value={7}>7</option>
                                <option className="package-select-option" value={8}>8</option>
                                <option className="package-select-option" value={9}>9</option>
                                <option className="package-select-option" value={888}>Unlimited</option>
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
                                onChange={(e) => setPremiumTitle(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="nsp package-premium-description nsp-col-4 nsp-row3">
                            <textarea
                                //readOnly={multiplePackages} 
                                className="package-textarea"
                                placeholder="Describe the details of what you're offering"
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
                                            <option key={day} value={day}>{day}</option>
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
                                            <option className="package-select-option" key={page} value={page}>{page}</option>
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
                                onClick={(e) => setPremiumDesignCustom(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-premium-content-upload nsp-col-4 nsp-row7 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                onClick={(e) => setPremiumContentUpload(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-premium-responsive-design nsp-col-4 nsp-row8 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
                                onClick={(e) => setPremiumResponsiveDesign(e.target.checked)}
                            >
                            </input>
                        </div>
                        <div className="nsp package-premium-source-code nsp-col-4 nsp-row9 package-checkbox-wrap">
                            <input
                                className="package-checkbox"
                                type="checkbox"
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
                                <option className="package-select-option" value={0}>0</option>
                                <option className="package-select-option" value={1}>1</option>
                                <option className="package-select-option" value={2}>2</option>
                                <option className="package-select-option" value={3}>3</option>
                                <option className="package-select-option" value={4}>4</option>
                                <option className="package-select-option" value={5}>5</option>
                                <option className="package-select-option" value={6}>6</option>
                                <option className="package-select-option" value={7}>7</option>
                                <option className="package-select-option" value={8}>8</option>
                                <option className="package-select-option" value={9}>9</option>
                                <option className="package-select-option" value={888}>Unlimited</option>
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

    return (

        <>
            <NavBar showCategory={false} />
            <div className="new-service__navbar-wrapper">

                <nav className="new-service__navbar">
                    <div className="new-service__navbar-list" onClick={() => setContent('overview')}>Overview</div>
                    <div className="new-service__navbar-list" onClick={() => setContent('pricing')}>Pricing</div>
                    <div className="new-service__navbar-list" onClick={() => setContent('description')}>Description & FAQ</div>
                    <div className="new-service__navbar-list" onClick={() => setContent('requirements')}>Requirements</div>
                </nav>

            </div>
            {component}
        </>
    )
};

export default EditService;