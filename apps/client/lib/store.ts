import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import notificationSlice from './features/Navigation/NotificationSlice';
import searchSlice from './features/search/SearchSlice';
import campaignSlice from './features/campaign/CampaignSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      notification: notificationSlice,
      search: searchSlice,
      campaign: campaignSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
