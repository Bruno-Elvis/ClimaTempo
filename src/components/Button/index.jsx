import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

/**
 *
 * @param {import("react-native").PressableProps} props
 */
export function Button({ children, disabled, ...props }) {
    return (
        <View style={ styles.buttonWrapper }>
            <Pressable
                disabled={ disabled }
                android_disableSound
                android_ripple={{ color: '#444' }}
                style={ [styles.button, disabled && styles.buttonDisabled] }
                {...props} >

                <Text style={ [styles.buttonLabel, disabled && styles.buttonLabelDisabled] }>
                    { children }

                </Text>

            </Pressable>

        </View>

    );

}
