import { Image, Pressable, Text, View } from 'react-native';

import { styles } from './styles';

import atualizar from '../../assets/icons/system/atualizar.png';

/**
 *
 * @param {import("react-native").PressableProps} props
 */
export function ButtonStyled({ children, disabled, ...props }) {
    return (
        <View style={ styles.buttonWrapper }>
            <Pressable
                disabled={ disabled }
                android_disableSound
                android_ripple={{ color: '#444' }}
                style={ [styles.button, disabled && styles.buttonDisabled] }
                {...props} >

                <Image source={ atualizar } style={{ width: 16, height: 16 }}/>

                <Text style={ [styles.buttonLabel, disabled && styles.buttonLabelDisabled] }>
                    { children }

                </Text>

            </Pressable>

        </View>

    );

}
