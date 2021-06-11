const LOAD_SERVICES = 'service/LOAD_SERVICES';
const LOAD_SERVICE = 'service/LOAD_SERVICE';
const LOAD_PROGRAMMING_LANG = 'service/LOAD_PROGRAMMING_LANG';
const ADD_OVERVIEW_SERVICE = 'service/ADD_OVERVIEW_SERVICE';
const LOAD_USER_NEW_SERVICE = 'service/LOAD_USER_NEW_SERVICE';
const UPDATE_OVERVIEW_SERVICE = 'service/UPDATE_OVERVIEW_SERVICE';

const loadAllServices = data => ({
    type: LOAD_SERVICES,
    data
})

const loadOneService = data => ({
    type: LOAD_SERVICE,
    data
})

const loadUServices = data => ({
    type: LOAD_USER_NEW_SERVICE,
    data
})

const loadProgrammingLang = data => ({
    type: LOAD_PROGRAMMING_LANG,
    data
})

const addOVService = data => ({
    type: ADD_OVERVIEW_SERVICE,
    data
})

const updateOVService = data => ({
    type: UPDATE_OVERVIEW_SERVICE,
    data
})

export const loadServices = () => async (dispatch) => {

    const response = await fetch(`/api/service/`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadAllServices(data));
    return data;
};

export const loadService = (id) => async (dispatch) => {

    const response = await fetch(`/api/service/${id}`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadOneService(data));
    return data;
};

export const loadUserServices = (id) => async (dispatch) => {
    const response = await fetch(`/api/service/user/${id}`)
    if (!response.ok) throw response

    const data = await response.json();
    // console.log("data", data)
    dispatch(loadUServices(data.pop()));
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
    const { userTitle, categoryId, programmingLang, userId, publish } = info
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

        case LOAD_USER_NEW_SERVICE: {
            newState = {}
            // console.log("action.data", action.data)
            newState["newService"] = action.data
            return {
                ...newState, ...state
            }
        }

        case LOAD_PROGRAMMING_LANG: {
            newState = {}

            newState["programmingLangs"] = action.data
            return {
                ...newState, ...state
            }
        }

        // case ADD_OVERVIEW_SERVICE: {
        //     newState = {}
        //     newState["newService"] = action.data
        //     return {
        //         ...newState, ...state
        //     }
        // }

        default:
            return state;
    }
}

export default serviceReducer;
