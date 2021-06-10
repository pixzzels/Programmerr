import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { loadProgramingLanguages, addOverviewService } from '../../store/service';
import NavBar from '../NavBar';

import './NewService.css';
import './Pricing.css'

function NewService() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const programmingLangs = useSelector(state => state.service.programmingLangs)
    const categories = useSelector(state => state.category.categories)


    const [content, setContent] = useState('pricing')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState()
    // const [programmingLang, setProgrammingLang] = useState()


    useEffect(() => {
        dispatch(loadProgramingLanguages())
    }, [dispatch])

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
            dispatch(addOverviewService({ userTitle, categoryId, programmingLang, userId }))
            setContent('pricing')
        }
        // console.log("title", title, "category", category, "prgramminglang", programmingLang)
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
                            value={title != '' ? title : ''}
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
                            <option value="" defaultValue>SELECT A CATEGORY</option>
                            {categories && categories.map((category => {
                                return (
                                    <option value={category.id} key={category.id}>{(category.name).toUpperCase()}</option>
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
                                                <input style={{ marginRight: "10px" }} type="radio" name="programming-language" value={language.id}
                                                ></input>
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

                            <label class="switch">
                                <input type="checkbox"></input>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div className="new-service__pricing-content">
                        <div className="new-service_package-revisions nsp-col-1 nsp-row5">Revisions</div>
                        <div className="new-service_package-source-code nsp-col-1 nsp-row6">Include Source Code</div>
                        <div className="new-service_package-price nsp-col-1 nsp-row7 ">Price</div>

                        <div className="new-service__package-basic nsp-col-2 nsp-row1">Basic</div>
                        <div className="package-basic-title nsp-col-2 nsp-row2">title</div>
                        <div className="package-basic-description nsp-col-2 nsp-row3">description</div>
                        <div className="package-basic-delivery nsp-col-2 nsp-row4">delivery</div>
                        <div className="package-basic-revisions nsp-col-2 nsp-row5">revisions</div>
                        <div className="package-basic-source-code nsp-col-2 nsp-row6">source-code</div>
                        <div className="package-basic-price nsp-col-2 nsp-row7">price</div>

                        <div className="new-service__package-standard nsp-col-3 nsp-row1">Standard</div>
                        <div className="package-standard-title nsp-col-3 nsp-row2">title</div>
                        <div className="package-standard-description nsp-col-3 nsp-row3">description</div>
                        <div className="package-standard-delivery nsp-col-3 nsp-row4">delivery</div>
                        <div className="package-standard-revisions nsp-col-3 nsp-row5">revisions</div>
                        <div className="package-standard-source-code nsp-col-3 nsp-row6">source-code</div>
                        <div className="package-standard-price nsp-col-3 nsp-row7">price</div>

                        <div className="new-service__package-premium nsp-col-4 nsp-row1">Premium</div>
                        <div className="package-premium-title nsp-col-4 nsp-row2">title</div>
                        <div className="package-premium-description nsp-col-4 nsp-row3">description</div>
                        <div className="package-premium-delivery nsp-col-4 nsp-row4">delivery</div>
                        <div className="package-premium-revisions nsp-col-4 nsp-row5">revisions</div>
                        <div className="package-premium-source-code nsp-col-4 nsp-row6">source-code</div>
                        <div className="package-premium-price nsp-col-4 nsp-row7">price</div>
                        

                    </div>

                    <footer className="overview__gig-title-footer">
                        <button className="new-service__overview-btn-submit"
                            onClick={handleOverviewSubmit}
                        >Save & Continue</button>
                    </footer>
                </div>
            </>

    }

    if (!programmingLangs) return null;
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
}

export default NewService;