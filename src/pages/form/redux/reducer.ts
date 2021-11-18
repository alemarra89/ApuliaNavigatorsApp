
// funzione che modificherà effettivamente username e password

import { createReducer } from "@reduxjs/toolkit";
import { loginAction, setPasswordAction, setUsernameAction } from "./actions";
import { FormReducerType } from "./types";

const initialState: FormReducerType = {
    username: "",
    usernameDirty: false,
    usernameError: "Il campo è obbligatorio",
    password: "",
    passwordDirty: false,
    passwordError: "Il campo è obbligatorio",
    posts: []
};

export const formReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUsernameAction, (state, action) => {
            state.username = action.payload;
            state.usernameDirty = true;
            if (!action.payload) {
                state.usernameError = 'Il campo è obbligatorio';
            } else if (action.payload.length > 10) {
                state.usernameError = 'La lunghezza massima deve essere di 10 caratteri';
            } else {
                state.usernameError = '';
            }
        })
        .addCase(setPasswordAction, (state, action) => {
            state.password = action.payload;
            state.passwordDirty = true;
            if (!action.payload) {
                state.passwordError = 'Il campo è obbligatorio';
            } else if (action.payload.length > 10) {
                state.passwordError = 'La lunghezza massima deve essere di 10 caratteri';
            } else {
                state.passwordError = '';
            }
        })
        .addCase(loginAction.fulfilled, (state, action) => {
            state.posts = action.payload
        })
});
