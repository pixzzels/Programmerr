const LOAD_SERVICES = 'service/LOAD_SERVICES';
const LOAD_SERVICE = 'service/LOAD_SERVICE';

const loadAllServices = data => ({
    type: LOAD_SERVICES,
    data
})

const loadOneService = data => ({
    type: LOAD_SERVICE,
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

        default:
            return state;
    }
}

export default serviceReducer;
