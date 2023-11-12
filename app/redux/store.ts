import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import languageReducer from "./features/language-slice";
import userReducer from "./features/user-slice";
import themeReducer from "./features/theme-slice";

export const store = configureStore({
  reducer: {
    languageReducer,
    themeReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
