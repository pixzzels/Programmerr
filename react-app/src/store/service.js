const LOAD_SERVICES = 'service/LOAD_SERVICES';
const LOAD_SERVICE = 'service/LOAD_SERVICE';
const LOAD_PROGRAMMING_LANG = 'service/LOAD_PROGRAMMING_LANG';
const ADD_OVERVIEW_SERVICE = 'service/ADD_OVERVIEW_SERVICE';

const loadAllServices = data => ({
    type: LOAD_SERVICES,
    data
})

const loadOneService = data => ({
    type: LOAD_SERVICE,
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

export const loadProgramingLanguages = () => async (dispatch) => {

    const response = await fetch(`/api/service/programming-lang`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadProgrammingLang(data));
    return data;
};

export const addOverviewService = (info) => async dispatch => {
    const { userTitle, categoryId, programmingLang, userId } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/service/add/overview`, {
        method: 'POST',
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
    dispatch(addOVService(data));
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

        case LOAD_PROGRAMMING_LANG: {
            newState = {}

            newState["programmingLangs"] = action.data
            return {
                ...newState, ...state
            }
        }

        case ADD_OVERVIEW_SERVICE: {
            
        }

        default:
            return state;
    }
}

export default serviceReducer;
