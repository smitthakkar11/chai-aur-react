import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for post
    }
})

export default store;