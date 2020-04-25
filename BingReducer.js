
export const GET_ALL = 'covid-tracker/all/LOAD';
export const GET_ALL_SUCCESS = 'covid-tracker/all/LOAD_SUCCESS';
export const GET_ALL_FAIL = 'covid-tracker/all/LOAD_FAIL';

export default function BingReducer(state = { all: {} }, action) {
    switch (action.type) {
        case GET_ALL:
            return { ...state, loading: true };
        case GET_ALL_SUCCESS:
            return { ...state, loading: false, all: action.payload.data };
        case GET_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching all bing data'
            };
        default:
            return state;
    }
}

export function getAll() {
    return {
        type: GET_ALL,
        payload: {
            request: {
                url: ``
            }

        }
    };
}

