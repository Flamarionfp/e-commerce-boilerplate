import { createSlice } from '@reduxjs/toolkit';

export interface UserStateProps {
  isAuth: boolean;
}

const initialState: UserStateProps = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    auth: (state) => {
      state.isAuth = true;
    },
  },
});

export const { auth } = userSlice.actions;

export default userSlice.reducer;
