import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { formReducer } from "../pages/form/redux/reducer";

export const store = configureStore({
    reducer: {
        form: formReducer,
        // gli altri
    }
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface ThunkApiConfig {
    state: RootState
}