import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import InputComponent from "../components/InputComponent";

const FormScreen: React.FC = () => {

    const [username, setUsername] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    // const [errorRequired, setErrorRequired] = useState<boolean>(false);
    // const [errorMaxlength, setErrorMaxlength] = useState<boolean>(false);
    
    const onChangeUsername = (text: string): string => {
        setUsername(text);
        
        // qui dentro applico le mie logiche di validazione

        // if (text === '')
        if (!text) {
            setUsernameError('Il campo è obbligatorio');
            // setErrorRequired(true);
        } else if (text.length > 10) {
            setUsernameError('La lunghezza massima deve essere di 10 caratteri');
            // setErrorMaxlength(true);
        } else {
            setUsernameError('');
            // setErrorMaxlength(false);
        }
        return 'ciao';
    }
    
    const onChangePassword = (text: string) => {
        setPassword(text);
        if (!text) {
            setPasswordError('Il campo è obbligatorio');
            // setErrorRequired(true);
        } else if (text.length > 10) {
            setPasswordError('La lunghezza massima deve essere di 10 caratteri');
            // setErrorMaxlength(true);
        } else {
            setPasswordError('');
            // setErrorMaxlength(false);
        }
    }
    
    return (
        <View style={styles.container}>
            {/* <TextInput 
                style={[styles.input, usernameError ? styles.inputError : undefined]}
                value={username}
                onChangeText={onChangeUsername}
                placeholder="Username"
            />
            {!!usernameError && (
                <Text style={{ color: 'red' }}>{usernameError}</Text>
            )} */}

            <InputComponent
                label="Username"
                value={username}
                onChange={onChangeUsername}
                placeholder={"Username"}
                error={usernameError}
            />
            <InputComponent
                label={'Password'}
                value={password}
                onChange={onChangePassword}
                placeholder={"Password"}
                error={passwordError}
                isPassword
            />

            <TouchableOpacity disabled={!!usernameError} style={[styles.button, usernameError ? styles.buttonDisabled : undefined]}>
                <Text style={styles.buttonText}>Pulsante ollè</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        backgroundColor: '#F00',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        fontSize: 18,
        borderColor: '#999'
    },
    buttonDisabled: {
        backgroundColor: '#CCC'
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default FormScreen;