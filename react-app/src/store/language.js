const LOAD_LANGUAGES = 'language/LOAD_LANGUAGES'


const loadAllLanguages = data => ({
    type: LOAD_LANGUAGES,
    data
})


export const loadLanguages = () => async (dispatch) => {

    const response = await fetch(`/api/language/`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) {
        throw response
    }

    const data = await response.json();

    dispatch(loadAllLanguages(data));
    return data;
}

const initialState = []


const languageReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {

        case LOAD_LANGUAGES: {
            newState = {}
            newState["languages"] = action.data

            return {
                ...newState, ...state
            }
        }

        default:
            return state;
    }
}

export default languageReducer;