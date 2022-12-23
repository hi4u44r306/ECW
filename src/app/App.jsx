import React, {useEffect} from "react";
// import firebase from 'firebase/app';
import './App.scss';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Login from "../components/Pages/Login";
// import Signup from "../components/Pages/Signup";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import Leaderboard from "../components/fragment/Leaderboard";
import NavigationMobile from "../components/fragment/NavigationMobile";
// import Copyright from "../components/fragment/Footer";
import UserInfo from "../components/Pages/UserInfo";
import Contact from "../components/Pages/Contact";
import About from "../components/Pages/About";
import Dashboard from "../components/fragment/Dashboard";
import Menu from "../components/Pages/Menu";
// import { useState } from "react";
// import Menu from "../components/fragment/Menu";



const App = () => {

    const {language} = useSelector(state => state.musicReducer);
   
    const dispatch = useDispatch();
    useEffect(()=>{
        if (language === null || language.includes("any")){
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('hindi')){
            alert("No hindi tracks available")
        } else {
            let x = musicDB.filter((item)=>(
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    },[dispatch, language]);
    

    return (
        <>
            <Router>
            <NavigationMobile/>
                <Switch>
                    <Route path="/" exact component={Menu}/>
                    <Route path="/home/leaderboard" component={Leaderboard}/>
                    <Route path="/home/userinfo" component={UserInfo}/>
                    <Route path="/home/contact" component={Contact}/>
                    <Route path="/home/about" component={About}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </Router>
        </>
        
    );
}

export default App;