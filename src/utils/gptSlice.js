import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        togglrGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
    }
});

export const { togglrGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;