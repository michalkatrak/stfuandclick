import React, {ReactChild, useContext} from 'react';
import {Header} from '../components/Header';
import {ContentContainer} from '../components/ContentContainer'
import styles from './AppLayout.styles';

interface Props {
    children: ReactChild,
}

const AppLayout = (props: Props) => {
    const {children} = props;
    const classes = styles();

    return (
        <React.Fragment>
            <Header/>
            <ContentContainer>
                {children}
            </ContentContainer>
        </React.Fragment>
    );
};

export default AppLayout;