const LOAD_CATEGORY = 'category/LOAD_CATEGORY'

const loadCategory = data => ({
    type: LOAD_CATEGORY,
    data
})

export const loadCategories = () => async (dispatch) => {
    const response = await fetch(`/api/category/`)

    if (!response.ok) throw response

    const data = await response.json();

    dispatch(loadCategory(data));
    return data;
};

const initialState = []

const categoryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_CATEGORY: {
            newState = {}
            newState["categories"] = action.data
            return {
              ...newState, ...state
            }
        }

        default:
            return state;
    }
}

export default categoryReducer;