import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'home',
    initialState: {
        url: {},
        genres:{}
  },
  reducers: {
    getApiConfigurations: (state, actions) => {
      state.url = actions.payload;
    },
    getGenres: (state, actions) => {
      state.genres = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfigurations, getGenres } = homeSlice.actions;

export default homeSlice.reducer;