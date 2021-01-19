import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from "./users-Reducers";
import authReducer from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: sitebarReducer,
    usersPage:usersReducer,
    auth: authReducer,



});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;