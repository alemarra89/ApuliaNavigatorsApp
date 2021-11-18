import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

interface Props {
    label?: string
    value: string
    onChange: (text: string) => void
    placeholder: string
    error: string
    isPassword?: boolean
}

const InputComponent: React.VFC<Props> = (props: Props) => {

    const {
        label,
        value,
        onChange,
        placeholder,
        error,
        isPassword = false
    } = props;

    return (
        <>
            {!!label && (
                <Text>{label}</Text>
            )}
            <TextInput
                style={[styles.input, error ? styles.inputError : undefined]}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={isPassword}
            />
            {!!error && (
                <Text style={{ color: 'red' }}>{error}</Text>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        borderColor: '#999'
    },
    inputError: {
        borderColor: '#F00'
    }
});


export default InputComponent;