import { createSlice } from '@reduxjs/toolkit';

let nextNotificationId = 0;

const initialState = {
  items: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: {
      reducer(state, action) {
        state.items = [...state.items, action.payload];
      },
      prepare(payload) {
        nextNotificationId += 1;
        return { payload: { ...payload, id: nextNotificationId } };
      },
    },
    deleteNotification(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const {
  addNotification,
  deleteNotification,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
