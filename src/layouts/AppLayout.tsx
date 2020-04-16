import React, {ReactChild} from 'react';
import {Header} from '../components/Header';
import {ContentContainer} from '../components/ContentContainer'

interface Props {
    children: ReactChild,
}

const AppLayout = (props: Props) => {
    const {children} = props;

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