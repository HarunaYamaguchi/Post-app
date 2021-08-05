import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UserType {
  uid: string;
  email: string;
  username: string;
}

const initialState = {
  user: {
    uid: "",
    username: "",
    email: "",
    // isFetching: false,
    // isSuccess: false,
    // isError: false,
    // errorMessage: "",
  },
};

// export const LoginAsync = createAsyncThunk<UserState>("user/login", async(_));

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
      state.user = {
        uid: "",
        username: "",
        email: "",
        // isFetching: false,
        // isSuccess: false,
        // isError: false,
        // errorMessage: "",
      };
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
