export interface Product {
  id: number;
  title: string;
  warrantyInformation: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: "In Stock" | "Low Stock" | "Out of Stock";
  minimumOrderQuantity: number;
  sku: string;
}
export interface Tab {
  label: string;
  value: string;
}
export interface ProductsState {
  products: Product[];
  filters: {
    pageNumber: number;
    pageSize: number;
    searchQuery: string;
    total: number;
    key_filters: KeyFilters;
    tab: Tab;
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
