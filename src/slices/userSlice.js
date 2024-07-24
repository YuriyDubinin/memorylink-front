import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getUserInfo} from '../api/users';

const initialState = {
    info: {},
    status: 'idle',
    error: null,
};

export const fetchUserInfo = createAsyncThunk('user/fetchUser', async (key, thunkApi) => {
    try {
        const resp = await getUserInfo({key});
        return resp;
    } catch (err) {
        return thunkApi.rejectWithValue(err);
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectUserInfo = (state) => state.user.info;

export default userSlice.reducer;
