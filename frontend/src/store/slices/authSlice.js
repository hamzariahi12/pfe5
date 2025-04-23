// src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fake async handlers for demonstration
export const login = createAsyncThunk("auth/login", async ({ email, password }) => {
  localStorage.setItem("isAuthenticated", "true");
  return { email };
});

export const signup = createAsyncThunk("auth/signup", async ({ email, password }) => {
  localStorage.setItem("isAuthenticated", "true");
  return { email };
});

export const resetPassword = createAsyncThunk("auth/resetPassword", async ({ email }) => {
  // Simulate sending a reset email
  return { success: true };
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = "reset-sent";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
