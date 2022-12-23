import React, {useState} from 'react';
import '../assets/scss/MusicCard.scss';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {useDispatch} from "react-redux";
import {setCurrentPlaying} from "../../actions/actions";
import Name from "./Name";
import Productdetail from "./Productdetail";

function MusicCard(props) {
    const {name , price , img} = props.music;
    const dispatch = useDispatch();

    function handlePlay() {
        dispatch(setCurrentPlaying(props.music))
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"music-card"}>
            {
            <>
                {/* Web */}
                <div className='web'>
                    <div onClick={handlePlay} className={"music-card-cover"} >
                        <img src={require("../assets/img/" + img).default} alt={name}/>
                    </div>
                    <React.Fragment>
                        <div className='gamesection'>
                            <Productdetail name={name} open={isOpen}  onClose={()=>setIsOpen(false)}></Productdetail>
                        </div>
                        <Name name={name} className={"song-name"} length={name.length}/>
                        <Name name={"NT : "+ price} className={"song-name"} length={name.length}/>
                    </React.Fragment>
                    <div className='d-flex justify-content-center'>
                        <div className={"music-card-cover"} >
                            <div className='testbutton'>
                                <AddShoppingCartIcon className="playicon"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //////////////////////////////////////// */}

                {/* Mobile */}
                <div className='mobile'>
                    <React.Fragment>
                        <div className='musicbanner'>
                            <div onClick={handlePlay} className={"music-card-cover"} >
                                <img src={require("../assets/img/" + img).default} alt={name}/>
                            </div>
                            <div className='gamesection'>
                                <Productdetail name={name} open={isOpen} onClose={()=>setIsOpen(false)}></Productdetail>
                            </div>
                            <div>
                                <Name name={name} className={"song-name"} length={name.length}/>
                            </div>
                        </div>
                    </React.Fragment>
                    <div className='buttoncontainer'>
                        <div onClick={handlePlay} className={"music-card-cover"} >
                            <div onClick={handlePlay} className='testbutton'>
                                <span>播放</span>
                                <PlayCircleOutlineIcon className="playicon"/>
                            </div>
                        </div>
                        <div className={"music-card-cover"} >
                            <div className='testbutton'>
                                <span>測驗</span>
                                <PlayCircleOutlineIcon className="circleicon"/>
                            </div>
                        </div>
                        <React.Fragment>
                            <div className="timesplayedcontainer-mobile">
                                <Name name={"測驗 :  "} className={"quizlabel"}/>
                                <Name name={"  "} className={"song-name"}/>
                            </div>
                        </React.Fragment>
                    </div>
                </div>
            </>
            }
        </div>
    );
}

export default MusicCard;