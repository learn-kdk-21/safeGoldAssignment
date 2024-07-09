import { createSlice } from '@reduxjs/toolkit';

const initialData = {
  auth: { openLoginModal: false },
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: { ...initialData },
  reducers: {
    updateLoginStatus: (state, action) => {
      state.auth.openLoginModal = action.payload;
    },
  },
});

const {
  actions: { updateLoginStatus },
  reducer,
} = authenticationSlice;
const selectorAuthentication = (state) => state.authenticationSlice;

export { updateLoginStatus, selectorAuthentication };

export default reducer;
