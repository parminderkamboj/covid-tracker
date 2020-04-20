import { combineReducers } from "redux";
import summaryReducer from './summary/summaryReducer';
import BingReducer from './BingReducer'
import timelineReducer from './timelines/timelineReducer'
export default rootReducer = combineReducers(
    {
        //  summaryReducer: summaryReducer,
        BingReducer: BingReducer,
        timelineReducer: timelineReducer,
    }
);