import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { STATUS } from "../utils/status";

const initialState = {
    users: [],
    userStatus: STATUS.IDLE,
}

export const registerApi = createAsyncThunk('register/sendApi', async (register) => {
    try {
        const response = await axios.post('http://localhost:8005/api/auth/register', register);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error, "Register Fail");
    }
})

export const loginApi = createAsyncThunk('login/sendApi', async (login) => {
    try {
        const response = await axios.post('http://localhost:8005/api/auth/login', login);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; 
    }
});


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerApi.pending, (state, action) => {
                state.userStatus = STATUS.LOADING;
            })
            .addCase(registerApi.fulfilled, (state, action) => {
                state.userStatus = STATUS.SUCCESS;
                state.users = action.payload;
            })
            .addCase(registerApi.rejected, (state, action) => {
                state.users = STATUS.FAILED;
            })

            .addCase(loginApi.pending, (state, action) => {
                state.userStatus = STATUS.LOADING;
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.userStatus = STATUS.SUCCESS;
                state.users = action.payload;
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.users = STATUS.FAILED;
            })
    }
})

export default userSlice.reducer;
