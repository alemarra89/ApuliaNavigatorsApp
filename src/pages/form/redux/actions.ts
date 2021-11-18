import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkApiConfig } from "../../../redux";
import { Post } from "./types";

// action per settare l'username
// string indica che il parametro in input è di tipo stringa
export const setUsernameAction = createAction<string, 'form/setUsernameAction'>('form/setUsernameAction');

// action per settare la password
export const setPasswordAction = createAction<string, 'form/setPasswordAction'>('form/setPasswordAction');


export const loginAction = createAsyncThunk<Post[], void, ThunkApiConfig>(
    'admin/loginAdmin', async (_, { getState }) => {
        console.log('username', getState().form.username);
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts: Post[] = await result.json();
        return posts;
    //   try {
    //     return new LoginApi().ssoOperatore({ token }).then((result: string) => {
    //       return result;
    //     }).catch((error) => {
    //       errorHandler(error, dispatch);
    //       return rejectWithValue(error);
    //     });
    //   } catch (error: unknown) {
    //     errorHandler(error, dispatch);
    //     return rejectWithValue(error);
    //   }
    }
  );
  