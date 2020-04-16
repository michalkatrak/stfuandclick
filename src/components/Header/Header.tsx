import React, {ReactNode} from 'react';
import styles from './Header.styles';


const Header = () => {
    const classes = styles();
    return (
        <header className={classes.root}>STFU AND CLICK</header>
    );
};

export default Header;