
export const GET_TIMESERIES = 'covid-tracker/timeseries/LOAD';
export const GET_TIMESERIES_SUCCESS = 'covid-tracker/timeseries/LOAD_SUCCESS';
export const GET_TIMESERIES_FAIL = 'covid-tracker/timeseries/LOAD_FAIL';

export default function timelineReducer(state = { timeSeries: [] }, action) {

    switch (action.type) {
        case GET_TIMESERIES:
            return { ...state, loading: true };
        case GET_TIMESERIES_SUCCESS:
            return { ...state, loading: false, timeSeries: action.payload.data };
        case GET_TIMESERIES_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching timeline data'
            };
        default:
            return state;
    }
}

export function getTimeSeries() {
    return {
        type: GET_TIMESERIES,
        payload: {
            request: {
                baseURL: `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu`,
                url: `/timeseries?iso2=US&onlyCountries=true`
            }
        }
    };
}

