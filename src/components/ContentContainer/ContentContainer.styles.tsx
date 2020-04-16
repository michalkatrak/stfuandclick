import {createUseStyles} from 'react-jss'
import {colors} from '../../style-constants';

const styles = createUseStyles({
    root: {
        maxWidth: 800,
        borderRadius: 20,
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: colors.main,
        margin: '30px auto',
        padding: 30,
    },
});

export default styles;