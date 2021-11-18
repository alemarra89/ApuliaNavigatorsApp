import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputComponent from "../../components/InputComponent";
import { useAppDispatch, useAppSelector } from "../../redux";
import { loginAction, setPasswordAction, setUsernameAction } from "./redux/actions";
import { formValidSelector, passwordDirtySelector, passwordErrorSelector, passwordSelector, postsSelector, usernameDirtySelector, usernameErrorSelector, usernameSelector } from "./redux/selectors";
import { Post } from "./redux/types";

const FormScreen: React.FC = () => {

    const dispatch = useAppDispatch();

    const username = useAppSelector(usernameSelector);
    const usernameDirty = useAppSelector(usernameDirtySelector);
    const usernameError = useAppSelector(usernameErrorSelector);

    // const [password, setPassword] = useState<string>('');
    // const [passwordError, setPasswordError] = useState<string>('');
    const password = useAppSelector(passwordSelector);
    const passwordDirty = useAppSelector(passwordDirtySelector);
    const passwordError = useAppSelector(passwordErrorSelector);

    const formValid = useAppSelector(formValidSelector);
    
    const posts = useAppSelector(postsSelector);

    const onChangeUsername = (text: string) => {
        dispatch(setUsernameAction(text));
        // if (!text) {
        //     setUsernameError('Il campo è obbligatorio');
        // } else if (text.length > 10) {
        //     setUsernameError('La lunghezza massima deve essere di 10 caratteri');
        // } else {
        //     setUsernameError('');
        // }
    }
    
    const onChangePassword = (text: string) => {
        dispatch(setPasswordAction(text));
        // setPassword(text);
        // if (!text) {
        //     setPasswordError('Il campo è obbligatorio');
        //     // setErrorRequired(true);
        // } else if (text.length > 10) {
        //     setPasswordError('La lunghezza massima deve essere di 10 caratteri');
        //     // setErrorMaxlength(true);
        // } else {
        //     setPasswordError('');
        //     // setErrorMaxlength(false);
        // }
    }

    const login = () => {
        dispatch(loginAction());
    }

    return (
        <View style={styles.container}>

            <InputComponent
                label="Username"
                value={username}
                onChange={onChangeUsername}
                placeholder={"Username"}
                error={usernameDirty ? usernameError : ''}
            />
            <InputComponent
                label={'Password'}
                value={password}
                onChange={onChangePassword}
                placeholder={"Password"}
                error={passwordDirty ? passwordError : ''}
                isPassword
            />

            <TouchableOpacity
                disabled={!formValid}
                onPress={login}
                style={[styles.button, !formValid ? styles.buttonDisabled : undefined]}
            >
                <Text style={styles.buttonText}>Pulsante ollè</Text>
            </TouchableOpacity>


            <FlatList
                data={posts}
                renderItem={({item: post} : {item: Post}) => (
                    <View style={{ borderTopWidth: 1 }}>
                        <Text>{post.title}</Text>
                        <Text>{post.body}</Text>
                    </View>
                )}
                keyExtractor={(item) => 'post_' + item.id}
            />
        
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