import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: '',
    reducers: {
        setLoading: ( state, action ) => {
            const loading = action.payload;
            return loading;
        }
    }
})

export const { etLoading } = loadingSlice.actions;

export default loadingSlice.reducer;