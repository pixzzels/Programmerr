const LOAD_USER = 'user/LOAD_USER';
const LOAD_PUBLIC_USER = 'user/LOAD_PUBLIC_USER';
const UPDATE_TAGLINE = 'user/UPDATE_TAGLINE';
const UPDATE_DESCRIPTION = 'user/UPDATE_DESCRIPTION';
const LOAD_USER_LANGUAGE = 'user/LOAD_USER_LANGUAGE';
const ADD_LANGUAGE = 'user/ADD_LANGUAGE';
const REMOVE_LANGUAGE = 'user/REMOVE_LANGUAGE';
const LOAD_SKILLS = 'user/LOAD_SKILLS';
const ADD_SKILL = 'user/ADD_SKILL';
const REMOVE_SKILL = 'user/REMOVE_SKILL';


const loadUserInfo = data => ({
    type: LOAD_USER,
    data
})

const loadPublicUserInfo = data => ({
    type: LOAD_PUBLIC_USER,
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

const loadUserSkill = data => ({
    type: LOAD_SKILLS,
    data
});

const addUserSkill = data => ({
    type: ADD_SKILL,
    data
});

const removeUserSkill = data => ({
    type: REMOVE_SKILL,
    data
});

export const loadUser = (userId) => async (dispatch) => {

    const response = await fetch(`/api/users/${userId}`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadUserInfo(data));
    return data;
};

export const loadPublicUser = (username) => async (dispatch) => {

    const response = await fetch(`/api/users/public/${username}`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) throw response

    const data = await response.json();
    console.log('data', data)

    dispatch(loadPublicUserInfo(data));
    return data;
};

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
};

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

    if (!response.ok) throw response
    dispatch(removeUserLanguage(id))
};

export const loadSkills = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/skill/${userId}`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) throw response
    const data = await response.json();
    dispatch(loadUserSkill(data));
    return data;
};

export const addSkill = (info) => async dispatch => {
    const { skill, skillLevel, userId } = info
    // console.log(language_id, languageLevel, userId)

    const response = await fetch(`/api/users/skill`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            level: skillLevel,
            user_id: userId,
            name: skill
        })
    })

    if (!response.ok) throw response
    const data = await response.json();
    dispatch(addUserSkill(data));
    return data
};

export const deleteUserSkill = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/skill/delete/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) throw response
    dispatch(removeUserSkill(id))
};

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

        case LOAD_PUBLIC_USER: {
            // console.log("hello")
            newState = {}

            newState["publicProfile"] = action.data
            // console.log(newState)
            // console.log("action.data", action.data)
            
            return {
                ...newState
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
            return newState;

        case REMOVE_LANGUAGE: {
            newState = { ...state };
            const index = newState.languages.findIndex((element) => element.id === action.data)
            let newArr = state.languages
            newArr.splice(index, 1)
            newState = { ...state, languages: [...newArr] }
            return newState;
        }

        case LOAD_SKILLS: {
            newState = {}
            newState["skills"] = action.data
            return {
                ...newState, ...state
            }
        }

        case ADD_SKILL:
            newState = {
                ...state,
                skills: [...state.skills, action.data]
            }
            return newState;

        case REMOVE_SKILL: {
            newState = { ...state };
            const index = newState.skills.findIndex((element) => element.id === action.data)
            let newArr = state.skills
            newArr.splice(index, 1)
            newState = { ...state, skills: [...newArr] }
            return newState;
        }

        default:
            return state;
    }
}

export default userReducer;
