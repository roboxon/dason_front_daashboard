import { createSlice } from "@reduxjs/toolkit";

type TTheme = "light" | "dark";

const initialState: TTheme = "light";

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateTheme } = theme.actions;
export default theme.reducer;
