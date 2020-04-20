import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import BingReducer from './BingReducer'
import rootReducer from './combinereducer';
const client = axios.create({
    // baseURL: `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu`,
    baseURL: `https://bing.com/covid/data`,
    responseType: 'json'
});
//https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=US&onlyCountries=true
export default store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
