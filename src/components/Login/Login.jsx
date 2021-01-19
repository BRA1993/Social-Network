import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {authApi} from "../../API/Api";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reduser";
import {useDispatch} from "react-redux";

export default function LoginForm() {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));

    useEffect(() => {
        authApi.login().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData());
            }
        });
    })
    useEffect(() => {
        authApi.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData(null,null,null,false));
            }
        });
    })
    const dispatch = useDispatch();


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input name={"Login"} placeholder={"Login"} ref={register}/>
            </div>
            <div>
                <input name={"Password"} placeholder={"Password"} type={"Password"} ref={register({required: true})}/>
            </div>
            <div>
                <input type={"checkbox"}/>remember me
            </div>
            {errors.exampleRequired && <span>This field is required</span>}

            <button>Login</button>


        </form>
    )
}
const Login = (props) => {

}