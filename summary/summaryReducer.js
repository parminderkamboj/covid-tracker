
export const GET_SUMMARY = 'covid-tracker/summary/LOAD';
export const GET_SUMMARY_SUCCESS = 'covid-tracker/summary/LOAD_SUCCESS';
export const GET_SUMMARY_FAIL = 'covid-tracker/summary/LOAD_FAIL';

export default function summaryReducer(state = { summary: { "confirmed": 0, "deaths": 0, "recovered": 0 } }, action) {
    // console.log("***** inside reducer " + JSON.stringify(action));
    switch (action.type) {
        case GET_SUMMARY:
            return { ...state, loading: true };
        case GET_SUMMARY_SUCCESS:
            return { ...state, loading: false, summary: action.payload.data };
        case GET_SUMMARY_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching summary data'
            };
        default:
            return state;
    }
}

export function getSummary() {
    // console.log("inside reducer getSummary");
    return {
        type: GET_SUMMARY,
        payload: {
            request: {
                url: ``
            }

        }
    };
}

// export function getTimeSeries() {
//     return {
//         type: GET_SUMMARY,
//         payload: {
//             request: {
//                 url: '/timeseries?iso2=US&onlyCountries=true'
//             }
//         }
//     };
// }

