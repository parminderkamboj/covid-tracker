import { combineReducers } from "redux";
import summaryReducer from './summary/summaryReducer';
import LocalDataReducer from './local/localDataReducer';
import timelineReducer from './timelines/timelineReducer';
import statesReducer from './states/statesReducer';
export default rootReducer = combineReducers(
    {
        summaryReducer: summaryReducer,
        statesReducer: statesReducer,
        LocalDataReducer: LocalDataReducer,
        timelineReducer: timelineReducer,
    }
);