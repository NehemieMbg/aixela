import { User } from '@/utils/types/temp';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: 0,
  fullName: '',
  username: '',
  email: '',
  avatarUrl: '',
  title: '',
  location: '',
  links: {
    website: '',
    twitter: '',
    instagram: '',
    linkedIn: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Set the user
     * @param state - the current state
     * @param action - the action to be performed
     * @returns the updated
     */
    setUser: (state, action) => {
      return action.payload;
    },

    /**
     * Update the user
     * @param state - the current state
     * @param action - the action to be performed
     * @returns the updated
     */
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
