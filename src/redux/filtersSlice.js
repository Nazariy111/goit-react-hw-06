import { createSlice } from "@reduxjs/toolkit";

const filterContacts = createSlice({
    name: "contacts",
    initialState: {
        name: "",
    },

    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = filterContacts.actions;

export const changeFilterReducer = filterContacts.reducer;

export const selectNameFilter = (state) => state.filters.name;