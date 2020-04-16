import {createUseStyles} from 'react-jss'
import {colors} from '../../style-constants';

const styles = createUseStyles({
    root: {
        backgroundColor: colors.main,
        height: 40,
        width: '100%',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        lineHeight: '40px',
        fontWeight: 600,
    },
});

export default styles;