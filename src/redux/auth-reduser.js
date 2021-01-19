import {authApi} from "../API/Api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false


};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;
    }

}
export const setAuthUserData = (userId, email, login,) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthUserData = () => (dispatch) => {

    return authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login,true));
            }
        });
}
/*export const Login = (email, password, rememberMe) => (dispatch) => {

    return authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });


}*/

export default authReducer;