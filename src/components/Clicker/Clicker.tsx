import React, {useContext, useEffect} from 'react';
import Teams from '../../stores/Teams'

const Clicker = () => {
    const {click} = useContext(Teams);

    return (
        <button onClick={click}>Click!</button>
    );
};

export default Clicker;