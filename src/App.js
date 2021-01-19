import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/User/UsersContainer";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeaderConteinar from "./components/Header/HeaderConteinar";
import Login from "./components/Login/Login";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderConteinar/>
            <Navbar/>
            <div className='app-wrapper-content'>


                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileConteiner/>}/>
                <Route path='/user' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>

            </div>
        </div>

    )
}


export default App;
