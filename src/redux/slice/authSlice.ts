import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  user: string | null
  role: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  role: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; role: string }>) => {
      state.isAuthenticated = true
      state.user = action.payload.username
      state.role = action.payload.role
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.role = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer