import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
};

const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    setNavOpen: (state, action) => {
      const { open } = action.payload;
      state.navOpen = open;
    },
  },
});

export const { setNavOpen } = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
