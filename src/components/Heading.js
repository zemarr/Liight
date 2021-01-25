import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({children}) => {
    return(
        <>
            {children}
        </>
    )
}

Heading.propTypes = {
    children: PropTypes.element.isRequired
};

export default Heading;

