import React from 'react';
import '../assets/scss/Containerfull.scss';
import Footer from './Footer';

const Containerfull = ({children}) => {
    return (
        <div className={"Containerfull"}>
            {children}
            <Footer/>
        </div>
    );
}

export default Containerfull;