export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  bloodGroup: string;
  address: Address;
  university: string;
  eyeColor: string;
}
export interface Address {
  address: string;
  city: string;
}
export interface UsersState {
  users: User[];
  filters: {
    pageNumber: number;
    pageSize: number;
    searchQuery: string;
    total: number;
    key_filters: KeyFilters;
  };
  _status: {
    _loading: boolean;
    _ready: boolean;
    _error: boolean;
  };
}
export interface KeyFilters {
  [key: string]: string;
}
