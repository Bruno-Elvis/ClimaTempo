import { Text } from 'react-native';

import { styles } from './styles';


/**
 *
 * @param {import('react-native').TextProps} props;
 */
export function TextStyled(props) {
    return <Text style={ styles.styledText } { ...props } />;

}
