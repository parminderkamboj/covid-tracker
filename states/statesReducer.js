
export const GET_STATES_DATA = 'covid-tracker/states/LOAD';
export const GET_STATES_DATA_SUCCESS = 'covid-tracker/states/LOAD_SUCCESS';
export const GET_STATES_DATA_FAIL = 'covid-tracker/states/LOAD_FAIL';

export default function statesReducer(state = { states: [] }, action) {
    switch (action.type) {
        case GET_STATES_DATA:
            return { ...state, loading: true };
        case GET_STATES_DATA_SUCCESS:
            {
                return { ...state, loading: false, states: action.payload.data };
            }
        case GET_STATES_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching states data'
            };
        default:
            return state;
    }
}

export function getStatesData() {
    return {
        type: GET_STATES_DATA,
        payload: {
            request: {
                baseURL: `http://localhost:3000`,
                url: `/state`
            }

        }
    };
}


