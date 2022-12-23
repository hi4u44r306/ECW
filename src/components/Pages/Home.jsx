import React, { useEffect, useState} from "react";
import './css/Home.scss';
// import NavigationMobile from "../fragment/NavigationMobile";
// import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import MusicCardContainer from "../fragment/MusicCardContainer";
// import {useSelector} from "react-redux";
import Search from "./Search";
import Categories from "../fragment/Categories";
import {Skeleton} from "@material-ui/lab";
import AddMusic from "./AddMusic";

function getCurrPage(pathName) {
    switch (pathName) {
        case "/":
            return <Categories/>
        case "/home/search":
            return <Search/>
        case "/home/addmusic":
            return <AddMusic/>
        default:
            if (pathName.startsWith("/home/categories/")) {
                return <Categories/>
            }
            return null
    }
}

function Home() {

    const [Page, setCurrPage] = useState(<MusicCardContainer/>);

    let pathname = window.location.pathname;
    useEffect(() => {
        setCurrPage(getCurrPage(pathname))
    }, [pathname]);

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);


    return (
        <div className={"home-container"}>
            {
                !loaded ?
                    <div className="Home-skeleton">
                        <Skeleton variant={"rect"} height={"100vh"}/>
                    </div>
                    :
                    <div>
                        {
                            Page
                        }
                    </div>  
            }
        </div>
    );
}

export default Home;