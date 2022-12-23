import React from 'react';
import '../assets/scss/Containerfull.scss';
import Copyright from './Footer';

const Containerfull = ({children}) => {
    return (
        <div className={"Containerfull"}>
            {children}
            <Copyright/>
        </div>
    );
}

export default Containerfull;