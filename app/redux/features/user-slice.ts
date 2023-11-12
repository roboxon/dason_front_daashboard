import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  _id: string | null;
  fname: string | null;
  lname: string | null;
  email: string | null;
  password: string | null;
  permission: string[];
  role: string[];
};

const initialState: TUser = {
  _id: null,
  fname: null,
  lname: null,
  email: null,
  password: null,
  permission: [],
  role: [],
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const { updateUser } = user.actions;
export default user.reducer;
