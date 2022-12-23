import React from 'react';
import '../assets/scss/Playlist.scss';
import {useSelector} from "react-redux";
import MusicCard from "./MusicCard";
import Containerfull from './Containerfull';

const Categories = () => {
    const typeOfPlaylist = window.location.pathname.substring(17);
    const {playlists} = useSelector(state=>state.musicReducer);

    return (
        <Containerfull>
            <div className={"Playlist"}>
                {/* <div className='playlisttitle'> {typeOfPlaylist} </div> */}
                <div className="Playlist-container">
                    {
                        playlists.map((item)=>(
                            item.type === typeOfPlaylist &&
                            <MusicCard key={item.name} music={item}/>
                        ))
                    }
                </div>
            </div>
        </Containerfull>
    );
}

export default Categories;