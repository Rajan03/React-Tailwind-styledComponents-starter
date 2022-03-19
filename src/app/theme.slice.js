import { primaryTheme, secondaryTheme } from "../utils/themes";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ...primaryTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    primary: (state) => {
      state = primaryTheme;
    },
    secondary: (state) => {
      state = secondaryTheme;
    },
  },
});

// ACTION
export const { primary, secondary } = themeSlice.actions;

// REDUCER
export default themeSlice.reducer;
