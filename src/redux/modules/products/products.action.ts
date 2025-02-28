// redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// types
import { Product, ProductsState } from "./products.types";
// http
import http from "../../../utils/http";

export const fetchProducts = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as { products: ProductsState };
    const { pageSize, key_filters, pageNumber, tab } = state.products.filters;

    let endpoint = "products";
    if (key_filters?.key) {
      endpoint += key_filters.key === "category" ? `/category/${key_filters.value}` : "/search";
    } else if (tab?.value !== "all") {
      endpoint += `/category/${tab.value}`;
    }

    const params = new URLSearchParams({
      limit: String(pageSize),
      skip: String(pageSize * (pageNumber - 1)),
    });

    if (key_filters?.key && key_filters.key !== "category") {
      params.append("q", key_filters.value);
    }

    const response = await http(`${endpoint}?${params.toString()}`, "GET");

    if (!response?.products) throw new Error("Invalid response format");

    const transformedData: Product[] = response.products.map(
      ({ id, title, warrantyInformation, brand, category, price, discountPercentage, rating, stock, availabilityStatus, minimumOrderQuantity, sku }: Product) => ({
        id,
        title,
        warrantyInformation,
        brand,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        availabilityStatus,
        minimumOrderQuantity,
        sku,
      })
    );

    return { products: transformedData, total: response.total };
  } catch (error) {
    console.error("Error fetching products:", error);
    return thunkAPI.rejectWithValue(error);
  }
});
