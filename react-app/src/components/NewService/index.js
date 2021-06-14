import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loadProgramingLanguages, addOverviewService } from '../../store/service';
import NavBar from '../NavBar';
import './NewService.css';

function NewService() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const programmingLangs = useSelector(state => state.service.programmingLangs)
    const categories = useSelector(state => state.category.categories)

    // overview

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState()

    const [add, setAdd] = useState(true);
    const [id, setId] = useState();

    useEffect(() => {
        dispatch(loadProgramingLanguages())
    }, [dispatch])

    if (!add) {
        return <Redirect to={`/new-service/edit/${id}`} />
    }

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
            const publish = false
            const listing_img = "https://i.ibb.co/4WsGpQL/Screen-Shot-2021-06-13-at-4-30-50-AM.png"

            dispatch(addOverviewService({ userTitle, categoryId, programmingLang, userId, publish, listing_img }))
                .then(res => {
                    console.log("res", res)
                    setId(res.id)
                    setAdd(false)
                })
        }
    }

    if (!programmingLangs) return null;
    return (
        <>
            <NavBar showCategory={false} />
            <div className="new-service__navbar-wrapper">

                <nav className="new-service__navbar">
                    <div style={{ color: "#1DBF73" }} className="new-service__navbar-list">Overview</div>
                    <div className="new-service__navbar-list">Pricing</div>
                    <div className="new-service__navbar-list">Description</div>
                    <div className="new-service__navbar-list">Requirements</div>
                </nav>

            </div>
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
                            value={title !== '' ? title : ''}
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
        </>
    )
}

export default NewService;