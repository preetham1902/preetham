import { combineReducers } from "redux";
import animalReducer from "./animalReducer";

export default history => 
    combineReducers({
        animalPage:animalReducer
    })
