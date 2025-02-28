// redux 
import { createAsyncThunk } from "@reduxjs/toolkit";
// types
import { User, UsersState } from "./user.types";
// http 
import http from "../../../utils/http";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as { users: UsersState };
    const { pageSize, key_filters, pageNumber } = state.users.filters;
    const method = key_filters && Object.keys(key_filters).length > 0 ? "filter" : "all";
    const endpoint = `users${method === "filter" ? "/filter" : ""}`;

    const params = new URLSearchParams({
      limit: String(pageSize),
      skip: String(pageSize * (pageNumber - 1)),
    });

    if (method === "filter") {
      Object.entries(key_filters).forEach(([key, value]) => {
        if (value) params.append(key, String(value));
      });
    }

    const response = await http(`${endpoint}?${params.toString()}`, "GET");
    const transformedData: User[] = response.users.map((user: User) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      maidenName: user.maidenName,
      birthDate: user.birthDate,
      email: user.email,
      phone: user.phone,
      age: user.age,
      gender: user.gender,
      bloodGroup: user.bloodGroup,
      city: user.address?.city ?? "N/A",
      address: user.address?.address ?? "N/A",
      university: user.university,
      eyeColor: user.eyeColor,
    }));
    return { users: transformedData, total: response.total };
  } catch (error) {
    console.log(error);
  }
});
