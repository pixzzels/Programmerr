const LOAD_USER = 'user/LOAD_USER'

const UPDATE_TAGLINE = 'user/UPDATE_TAGLINE'
const UPDATE_DESCRIPTION = 'user/UPDATE_DESCRIPTION'
const LOAD_LANGUAGES = 'user/LOAD_LANGUAGES'


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

const loadAllLanguages = data => ({
    type: LOAD_LANGUAGES,
    data
})



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

    if (!response.ok) {
        throw response
    }

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

    if (!response.ok) {
        throw response
    }

    const data = await response.json();
    dispatch(updateUserDescription(data));
    return data
};

export const loadLanguages = () => async (dispatch) => {

    const response = await fetch(`/api/users/languages`, {
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
                [action.data.id]: action.data
            };
        }

        case UPDATE_DESCRIPTION: {
            return {
                ...state,
                [action.data.id]: action.data
            };
        }

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

export default userReducer;
