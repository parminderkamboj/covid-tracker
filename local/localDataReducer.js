export const GET_LOCAL_DATA = 'covid-tracker/local/LOAD';
export const GET_LOCAL_DATA_SUCCESS = 'covid-tracker/local/LOAD_SUCCESS';
export const GET_LOCAL_DATA_FAIL = 'covid-tracker/local/LOAD_FAIL';

export default function localDataReducer(state = { localData: {} }, action) {
    switch (action.type) {
        case GET_LOCAL_DATA:
            return { ...state, loading: true };
        case GET_LOCAL_DATA_SUCCESS:
            {
                return { ...state, loading: false, localData: action.payload.data };
            }
        case GET_LOCAL_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching states data'
            };
        default:
            return state;
    }
}

export function getLocalData(theLat, theLng) {
    return {
        type: GET_LOCAL_DATA,
        payload: {
            request: {
                url: `/local`,
                method: `post`,
                data: {
                    lat: theLat,
                    lng: theLng
                }

            }

        }
    };
}


