import React, {ReactChild} from 'react';
import styles from './ContentContainer.styles';

interface Props {
    children: ReactChild,
}

const ContentContainer = (props: Props) => {
    const {children} = props;
    const classes = styles();
    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};

export default ContentContainer;