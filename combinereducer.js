import { combineReducers } from "redux";
import summaryReducer from './summary/summaryReducer';
import timelineReducer from './timelines/timelineReducer'
export default rootReducer = combineReducers(
    {
        summaryReducer: summaryReducer,
        timelineReducer: timelineReducer,
    }
);