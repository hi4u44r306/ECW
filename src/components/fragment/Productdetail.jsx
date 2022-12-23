import React from 'react';
import Containerfull from './Containerfull';
import '../assets/scss/Game.scss';
// import { toast, ToastContainer} from "react-toastify"
import Name from './Name';

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
mic.continous = true
mic.interimResults = true
mic.lang = 'en-US'

export default function Productdetail({open, onClose, bookname, pagename}){

   
    if (!open) return null
    return(
      <>
        <Containerfull>
          <div className='Overlay'/>
          <div className='gamebox'>
            {/* <div>
              <ToastContainer
              // className="gamenotification"
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
            </div>  */}
            <div className='boxtitle'>
              <span className='closebtn' onClick={onClose}>❌</span>
              <Name name={bookname} className={"game-name"}/>
              <Name name={pagename} className={"game-name"}/>
            </div>
          </div>
        </Containerfull>
      </>
  )
}

