import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UserType {
  uid: string | null;
  email: string | null;
  password: string | null;
}

interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
