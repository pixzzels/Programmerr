const LOAD_SERVICES = 'service/LOAD_SERVICES';
const LOAD_SERVICE = 'service/LOAD_SERVICE';
const LOAD_PROGRAMMING_LANG = 'service/LOAD_PROGRAMMING_LANG';
const ADD_OVERVIEW_SERVICE = 'service/ADD_OVERVIEW_SERVICE';

// user edit services
const LOAD_SERVICE_EDIT = 'service/LOAD_SERVICE_EDIT';
const UPDATE_OVERVIEW_SERVICE = 'service/UPDATE_OVERVIEW_SERVICE';
const UPDATE_BASIC_WEB_SERVICE = 'service/UPDATE_BASIC_WEB_SERVICE';
const UPDATE_STANDARD_WEB_SERVICE = 'service/UPDATE_STANDARD_WEB_SERVICE';
const UPDATE_PREMIUM_WEB_SERVICE = 'service/UPDATE_PREMIUM_WEB_SERVICE';
const UPDATE_SERVICE_DESCRIPTION = 'service/UPDATE_SERVICE_DESCRIPTION';
const UPDATE_SERVICE_IMAGE = 'service/UPDATE_SERVICE_IMAGE';
const UPDATE_SERVICE_PUBLISH = 'service/UPDATE_SERVICE_PUBLISH';
const DELETE_SERVICE = 'service/DELETE_SERVICE'

// user profile services
const LOAD_USER_SERVICES = 'service/LOAD_USER_SERVICES';

const loadAllServices = data => ({
    type: LOAD_SERVICES,
    data
});

const loadOneService = data => ({
    type: LOAD_SERVICE,
    data
});

const loadUserServiceEdit = data => ({
    type: LOAD_SERVICE_EDIT,
    data
});

const loadProgrammingLang = data => ({
    type: LOAD_PROGRAMMING_LANG,
    data
});

const addOVService = data => ({
    type: ADD_OVERVIEW_SERVICE,
    data
});

const updateOVService = data => ({
    type: UPDATE_OVERVIEW_SERVICE,
    data
});

const updateBasicPricing = data => ({
    type: UPDATE_BASIC_WEB_SERVICE,
    data
});

const updateStandardPricing = data => ({
    type: UPDATE_STANDARD_WEB_SERVICE,
    data
});

const updatePremiumPricing = data => ({
    type: UPDATE_PREMIUM_WEB_SERVICE,
    data
});

const updateSDescription = data => ({
    type: UPDATE_SERVICE_DESCRIPTION,
    data
});

const updateSImage = data => ({
    type: UPDATE_SERVICE_IMAGE,
    data
})

const updateServicePublish = data => ({
    type: UPDATE_SERVICE_PUBLISH,
    data
})

const deleteUserService = data => ({
    type: DELETE_SERVICE,
    data
})

const loadAllUserOwnedServices = data => ({
    type: LOAD_USER_SERVICES,
    data
})
export const loadServices = () => async (dispatch) => {
    const response = await fetch(`/api/service/`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadAllServices(data.reverse()));
    return data;
};

export const loadService = (id) => async (dispatch) => {

    const response = await fetch(`/api/service/${id}`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadOneService(data));
    return data;
};

export const loadServiceEdit = (serviceId) => async (dispatch) => {
    const response = await fetch(`/api/service/user/edit/${serviceId}`)
    if (!response.ok) throw response

    const data = await response.json();
    // console.log("data", data)
    dispatch(loadUserServiceEdit(data));
    return data;
};

export const loadProgramingLanguages = () => async (dispatch) => {

    const response = await fetch(`/api/service/programming-lang`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadProgrammingLang(data));
    return data;
};

export const addOverviewService = (info) => async dispatch => {
    const { userTitle, categoryId, programmingLang, userId, publish, listing_img } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/service/add/overview`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: userTitle,
            publish: publish,
            category_id: categoryId,
            service_language_id: programmingLang,
            user_id: userId,
            listing_img: listing_img
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    // console.log(data)
    dispatch(addOVService(data));
    return data
};

export const updateOverviewService = (info) => async dispatch => {
    const { userTitle, categoryId, programmingLang, userId, serviceId } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/service/update/overview/${serviceId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: userTitle,
            category_id: categoryId,
            service_language_id: programmingLang,
            user_id: userId,
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    // console.log(data)
    dispatch(updateOVService(data));
    return data
};

export const updateBasicPackage = (info) => async dispatch => {
    const { basicTitle, basicDescription, dayDelivery, basicPages, basicDesignCustom,
        basicContentUpload, basicResponsiveDesign, basicSourceCode, basicRevisions, basicPrice, serviceId
    } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/service/update/basic/${serviceId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type: "Basic",
            title: basicTitle,
            description: basicDescription,
            delivery_time: dayDelivery,
            pages: basicPages,
            design_custom: basicDesignCustom,
            content_upload: basicContentUpload,
            responsive_design: basicResponsiveDesign,
            source_code: basicSourceCode,
            revisions: basicRevisions,
            price: basicPrice
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    // console.log(data)
    dispatch(updateBasicPricing(data));
    return data
};

export const updateStandardPackage = (info) => async dispatch => {
    const { standardTitle, standardDescription, sdayDelivery, standardPages, standardDesignCustom,
        standardContentUpload, standardResponsiveDesign, standardSourceCode, standardRevisions, standardPrice, serviceId
    } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/service/update/standard/${serviceId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type: "Standard",
            title: standardTitle,
            description: standardDescription,
            delivery_time: sdayDelivery,
            pages: standardPages,
            design_custom: standardDesignCustom,
            content_upload: standardContentUpload,
            responsive_design: standardResponsiveDesign,
            source_code: standardSourceCode,
            revisions: standardRevisions,
            price: standardPrice
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    // console.log(data)
    dispatch(updateStandardPricing(data));
    return data
};

export const updatePremiumPackage = (info) => async dispatch => {
    const { premiumTitle, premiumDescription, pdayDelivery, premiumPages, premiumDesignCustom,
        premiumContentUpload, premiumResponsiveDesign, premiumSourceCode, premiumRevisions, premiumPrice, serviceId
    } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/service/update/premium/${serviceId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type: "Premium",
            title: premiumTitle,
            description: premiumDescription,
            delivery_time: pdayDelivery,
            pages: premiumPages,
            design_custom: premiumDesignCustom,
            content_upload: premiumContentUpload,
            responsive_design: premiumResponsiveDesign,
            source_code: premiumSourceCode,
            revisions: premiumRevisions,
            price: premiumPrice
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    // console.log(data)
    dispatch(updatePremiumPricing(data));
    return data
};

export const updateServiceDescription = (info) => async dispatch => {
    const { serviceDescription, serviceId } = info

    const response = await fetch(`/api/service/update/description/${serviceId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            description: serviceDescription
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(updateSDescription(data));
    return data
};

export const updateServiceImage = (info) => async dispatch => {
    const formData = new FormData();
    formData.append('image', info['image']);
    const response = await fetch(`/api/service/update/image/${info['serviceId']}`, {
        method: 'POST',
        body: formData,
    });
    if (response.ok) {
        const data = await response.json();
        // console.log('data', data)
        dispatch(updateSImage(data));
        return response;
    } else {
        throw response;
    }

}

export const setServicePublish = (info) => async dispatch => {
    const { publish, serviceId } = info

    const response = await fetch(`/api/service/publish/${serviceId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            publish,
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(updateServicePublish(data));
    return data
};

export const deleteService = (serviceId) => async dispatch => {


    const response = await fetch(`/api/service/delete/${serviceId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) throw response

    dispatch(deleteUserService(serviceId));
};

export const loadUserOwnedServices = (userId) => async (dispatch) => {

    const response = await fetch(`/api/service/owned/${userId}`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadAllUserOwnedServices(data));
    return data;
};

const initialState = []

const serviceReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SERVICES: {
            newState = {}
            newState["services"] = action.data
            return {
                ...newState, ...state
            }
        }

        case LOAD_SERVICE: {
            newState = {}
            newState["service"] = action.data
            return {
                ...newState
            }
        }

        case LOAD_SERVICE_EDIT: {
            newState = {}
            newState["editService"] = action.data
            // const newNewState = {
            //     ...state,
            //     userServices: action.data
            // }
            return {
                ...newState, ...state
            }
        }

        case UPDATE_SERVICE_IMAGE: {
            newState = {
                ...state,
                editService: action.data
            }
            return newState;
        }

        case LOAD_PROGRAMMING_LANG: {
            newState = {}
            newState["programmingLangs"] = action.data
            return {
                ...newState, ...state
            }
        }

        case UPDATE_BASIC_WEB_SERVICE: {
            newState = {
                ...state,
                editService: action.data
            }
            return newState;
        }

        case UPDATE_STANDARD_WEB_SERVICE: {
            newState = {
                ...state,
                editService: action.data
            }
            return newState;
        }

        case UPDATE_PREMIUM_WEB_SERVICE: {
            newState = {
                ...state,
                editService: action.data
            }
            return newState;
        }

        case UPDATE_SERVICE_DESCRIPTION: {
            newState = {
                ...state,
                editService: action.data
            }
            return newState;
        }

        case LOAD_USER_SERVICES: {
            newState = {}
            newState["userServices"] = action.data
            // console.log('testing', action.data)
            return {
                ...newState, ...state
            }
        }

        // case UPDATE_SERVICE_PUBLISH: {
        //     newState = {
        //         ...state,
        //         userServices: [...state.userServices, action.data]
        //     }
        //     return newState;
        // }

        // case LOAD_USER_SERVICES: {
        //     newState = {}
        //     const newData = action.data.filter((service) => service.publish === true)
        //     newState["activeServices"] = newData

        //     return {
        //         ...newState, ...state
        //     }
        // }

        case DELETE_SERVICE: {
            newState = { ...state };
            const index = newState.userServices.findIndex((element) => element.id === action.data)
            let newArr = state.userServices
            newArr.splice(index, 1)
            newState = { ...state, userServices: [...newArr] }
            return newState;
        }

        default:
            return state;
    }
}

export default serviceReducer;
