import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// action 
import { fetchUsers } from "./user.action";
// types
import { KeyFilters, UsersState } from "./user.types";

const initialState: UsersState = {
  users: [],
  filters: { pageNumber: 1, pageSize: 5, searchQuery: "", total: 0, key_filters: {} },
  _status: {
    _loading: false,
    _ready: false,
    _error: false,
  },
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.filters.pageNumber = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.filters.pageSize = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload;
    },
    setKeyFilters: (state, action: PayloadAction<KeyFilters>) => {
      state.filters.key_filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state._status = { _loading: true, _ready: false, _error: false };
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload?.users ?? [];
        state.filters.total = action.payload?.total ?? 0;
        state._status = { _loading: false, _ready: true, _error: false };
      })
      .addCase(fetchUsers.rejected, (state) => {
        state._status = { _loading: false, _ready: false, _error: true };
      });
  },
});

export const { setPageSize, setSearchQuery, setPageNumber, setKeyFilters } = usersSlice.actions;
export default usersSlice.reducer;
