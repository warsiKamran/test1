import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, {
    
    contactRequest: state => {
        state.loading = true;
    },
    contactRequestSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    contactRequestFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    courseRequest: state => {
        state.loading = true;
    },
    courseRequestSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    courseRequestFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message = null;
    },
});

