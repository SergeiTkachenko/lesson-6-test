import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0, a: 1, b: 2 },
  reducers: {
    updateInc: state => {
      state.value += 1;
    },
    updateDic: (state, action) => {
      state.value -= action.payload;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  whitelist: ['value'],
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { updateInc, updateDic } = clicksSlice.actions;
