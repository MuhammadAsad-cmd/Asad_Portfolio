import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftSidebar: false,
  rightSidebar: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state[action.payload] = true;
    },
    closeSidebar: (state, action) => {
      state[action.payload] = false;
    },
    toggleSidebar: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
