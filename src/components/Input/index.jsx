import { TextInput } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

/**
 *
 * @param {import('react-native').TextInputProps} props;
 */
export function Input(props) {
    const [isFocused, setIsFocused] = useState(false);

    return <TextInput
                style={[styles.styledInput, isFocused && styles.inputFocusedStyle]}
                placeholderTextColor="#aaa"
                cursorColor="white"
                selectionColor="black"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                { ...props }  />;

}
