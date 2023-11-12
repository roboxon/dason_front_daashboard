import { createSlice } from "@reduxjs/toolkit";

type auth = {
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: auth = {
  accessToken: null,
  refreshToken: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { updateAuth } = auth.actions;
export default auth.reducer;
