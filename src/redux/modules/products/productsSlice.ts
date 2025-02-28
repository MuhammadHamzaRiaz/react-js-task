import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// action
import { fetchProducts } from "./products.action";
// types
import { KeyFilters, ProductsState, Tab } from "./products.types";

const initialState: ProductsState = {
  products: [],
  filters: {
    pageNumber: 1,
    pageSize: 5,
    searchQuery: "",
    total: 0,
    key_filters: {},
    tab: { label: "All", value: "all" },
  },
  _status: {
    _loading: false,
    _ready: false,
    _error: false,
  },
};
const productsSlice = createSlice({
  name: "products",
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
    setTabs: (state, action: PayloadAction<Tab>) => {
      state.filters.tab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state._status = { _loading: true, _ready: false, _error: false };
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload?.products ?? [];
        state.filters.total = action.payload?.total ?? 0;
        state._status = { _loading: false, _ready: true, _error: false };
      })
      .addCase(fetchProducts.rejected, (state) => {
        state._status = { _loading: false, _ready: false, _error: true };
      });
  },
});

export const { setPageSize, setSearchQuery, setPageNumber, setKeyFilters, setTabs } =
  productsSlice.actions;
export default productsSlice.reducer;
