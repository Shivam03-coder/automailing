import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  accountId: string | null;
}

const initialState: initialStateTypes = {
  accountId: "",
};

export const accountState = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    setAccountId: (state, action: PayloadAction<string | null>) => {},
  },
});

export const { setAccountId } = accountState.actions;
