const LOAD_USER = 'user/LOAD_USER'

const UPDATE_TAGLINE = 'user/UPDATE_TAGLINE'
const UPDATE_DESCRIPTION = 'user/UPDATE_DESCRIPTION'
const LOAD_USER_LANGUAGE = 'user/LOAD_USER_LANGUAGES'
const ADD_LANGUAGE = 'user/ADD_LANGUAGE'
const REMOVE_LANGUAGE = 'user/REMOVE_LANGUAGE'




const loadUserInfo = data => ({
    type: LOAD_USER,
    data
})

const updateUserTagline = data => ({
    type: UPDATE_TAGLINE,
    data
});

const updateUserDescription = data => ({
    type: UPDATE_DESCRIPTION,
    data
});

const loadUserLanguage = data => ({
    type: LOAD_USER_LANGUAGE,
    data
})


const addUserLanguage = data => ({
    type: ADD_LANGUAGE,
    data
});

const removeUserLanguage = data => ({
    type: REMOVE_LANGUAGE,
    data
});

export const loadUser = (userId) => async (dispatch) => {

    const response = await fetch(`/api/users/${userId}`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) {
        throw response
    }

    const data = await response.json();

    dispatch(loadUserInfo(data));
    return data;
}

export const updateTagline = (info) => async dispatch => {
    const { userId, tagline } = info

    const response = await fetch(`/api/users/tagline/${userId}`, {

        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: userId,
            tag_line: tagline
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(updateUserTagline(data));
    return data
};

export const updateDescription = (info) => async dispatch => {
    const { userId, description } = info

    const response = await fetch(`/api/users/description/${userId}`, {

        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: userId,
            description: description
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(updateUserDescription(data));
    return data
};

export const loadUserLanguages = (userId) => async (dispatch) => {

    const response = await fetch(`/api/users/language/${userId}`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) throw response


    const data = await response.json();

    dispatch(loadUserLanguage(data));
    return data;
}

export const addLanguage = (info) => async dispatch => {
    const { language_id, languageLevel, userId } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/users/language`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            level: languageLevel,
            user_id: userId,
            language_id: language_id
        })
    })

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(addUserLanguage(data));
    return data
};

export const deleteUserLanguage = (id) => async (dispatch) => {

    const response = await fetch(`/api/users/language/delete/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
        throw response
    }

    dispatch(removeUserLanguage(id))
}

const initialState = []

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_USER: {
            newState = {}

            newState["profile"] = action.data
            return {
                ...newState, ...state
            }
        }
        case UPDATE_TAGLINE: {
            return {
                ...state,
                profile: action.data
            };
        }

        case UPDATE_DESCRIPTION: {
            newState = {
                ...state,
                profile: action.data
            }
            console.log("newState", newState)
            return newState;
        }

        case LOAD_USER_LANGUAGE: {
            newState = {}
            newState["languages"] = action.data
            return {
                ...newState, ...state
            }
        }

        case ADD_LANGUAGE:
            newState = {
                ...state,
                languages: [...state.languages, action.data]
            }
            console.log("...state", newState)
            return newState;
        // delete newState.languages.filter((language) => language.id === action.data)
        // // delete newState.languages[action.data]
        // console.log("sdfsdfsf", newState.languages)

        case REMOVE_LANGUAGE: {
            newState = { ...state };
            // console.log("beginning", newState)

            const index = newState.languages.findIndex((element) => element.id === action.data)
            // // console.log("index", index)

            // console.log("deleted", newState.languages.splice(index, 1))

            // delete newState.languages.splice(index, 1)

            // console.log("end", newState)
            // return newState;

            let newArr = state.languages
            newArr.splice(index, 1)
            console.log("newarr", newArr)
            newState = { ...state, languages: [...newArr] }
            return newState;
        }

        default:
            return state;
    }
}

export default userReducer;
