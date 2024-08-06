import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {getUserInfo} from '../api/users';

const initialState = {
    info: {isAuth: false},
    status: 'idle',
    error: null,
};

export const fetchUserInfo = createAsyncThunk('user/fetchUser', async (compositeKey, thunkApi) => {
    try {
        const resp = await getUserInfo({compositeKey});
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
                state.info = {...action.payload, isAuth: true};
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.info = {isAuth: false};
                state.error = action.payload.response.data;
            });
    },
});

export const selectUserInfo = (state) => state.user.info;

export default userSlice.reducer;
