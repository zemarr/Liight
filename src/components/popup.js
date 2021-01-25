import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({closeMe, text}) => {
    return(
        <>
            <div className='popup'>
                <div className='inner-popup'>
                    <h1>{text}</h1>
                    <button onClick={closeMe}></button>
                </div>
            </div>
        </>
    )
}


export default Popup;

Popup.propTypes = {
    closeMe: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}