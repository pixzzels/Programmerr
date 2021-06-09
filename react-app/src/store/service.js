const LOAD_SERVICES = 'service/LOAD_SERVICES';

const loadAllServices = data => ({
    type: LOAD_SERVICES,
    data
})


export const loadServices = () => async (dispatch) => {

    const response = await fetch(`/api/services/`)

    if (!response.ok) throw response

    const data = await response.json();
    dispatch(loadAllServices(data));
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

        default:
            return state;
    }
}

export default serviceReducer;
