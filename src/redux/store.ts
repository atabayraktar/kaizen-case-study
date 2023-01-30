import { configureStore } from '@reduxjs/toolkit';
import promotionSlice from './promotion/promotion.slice';
import tagSlice from './tag/tag.slice';

export const store = configureStore({
  reducer: {
    promotion: promotionSlice,
    tags: tagSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
