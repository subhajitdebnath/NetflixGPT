import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieSearchResult: []
    },
    reducers: {
        togglrGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addMovieSearchResult: (state, action) => {
            state.movieSearchResult = action.payload;
        },
    }
});

export const { togglrGptSearchView, addMovieSearchResult } = gptSlice.actions;

export default gptSlice.reducer;