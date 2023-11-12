import { TLanguage } from "@/app/types/global";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TLanguage = {
  name: "English",
  dir: "ltr",
  shortCode: "en",
  flag: "",
};

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    updateLanguage: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { updateLanguage } = language.actions;
export default language.reducer;
