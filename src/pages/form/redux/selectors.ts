// metodi che restituiranno username e password

import { createSelector } from "reselect";
import { RootState } from "../../../redux";
import { FormReducerType, Post } from "./types";

const formReducer = (state: RootState): FormReducerType => state.form;

export const usernameSelector = createSelector(
    formReducer,
    (state: FormReducerType): string => state.username
);

export const usernameDirtySelector = createSelector(
    formReducer,
    (state: FormReducerType): boolean => state.usernameDirty
);

export const usernameErrorSelector = createSelector(
    formReducer,
    (state: FormReducerType): string => state.usernameError
);

export const passwordSelector = createSelector(
    formReducer,
    (state: FormReducerType): string => state.password
);

export const passwordDirtySelector = createSelector(
    formReducer,
    (state: FormReducerType): boolean => state.passwordDirty
);

export const passwordErrorSelector = createSelector(
    formReducer,
    (state: FormReducerType): string => state.passwordError
);

export const formValidSelector = createSelector(
    formReducer,
    (state: FormReducerType): boolean => !state.usernameError && !state.passwordError
);

export const postsSelector = createSelector(
    formReducer,
    (state: FormReducerType): Post[] => state.posts
);
