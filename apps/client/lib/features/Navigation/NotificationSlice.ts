// notification slice
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define a type for the slice state
interface NotificationState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: NotificationState = {
  isOpen: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openNotification: (state) => {
      state.isOpen = true;
    },
    closeNotification: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNotification, closeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
