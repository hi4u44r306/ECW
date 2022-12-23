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
                <div onClick={handlePlay} className={"music-card-cover"} >
                    <img src={require("../assets/img/" + img).default} alt={name}/>
                </div>
                <React.Fragment>
                    <div className='gamesection'>
                        <Productdetail name={name} open={isOpen} onClose={()=>setIsOpen(false)}></Productdetail>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-end'>
                        <div className='d-flex flex-column'>
                            <span className='product-name'>{name}</span>
                            <span className='price'>NT : {price}</span>
                        </div>
                        <div className='carticoncontainer'>
                            <AddShoppingCartIcon className="carticon" onClick={()=>{alert("addtocart")}}/>
                        </div>
                    </div>
                </React.Fragment>
            </>
            }
        </div>
    );
}

export default MusicCard;