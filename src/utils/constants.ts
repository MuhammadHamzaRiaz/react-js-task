export const filterAbleUserColumns = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "age", label: "Age" },
  { key: "gender", label: "Gender" },
];

export const userTableColumns = [
  { key: "id", label: "ID" },
  { key: "firstName", label: "First Name" },
  { key: "maidenName", label: "Middle Name" },
  { key: "lastName", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "age", label: "Age" },
  { key: "gender", label: "Gender" },
  { key: "bloodGroup", label: "Blood Group" },
  {
    key: "university",
    label: "University",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "city",
    label: "City",
  },
  { key: "eyeColor", label: "Eye Color" },
];

export const perPageOptions = [5, 10, 20, 50];

export const productsTableColumns = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "brand", label: "Brand" },
  { key: "category", label: "Category" },
  { key: "price", label: "Price", className: "text-right", symbol: "$" },
  { key: "discountPercentage", label: "Discount %", className: "text-right" },
  { key: "rating", label: "Rating", className: "text-right" },
  { key: "stock", label: "Stock", className: "text-right" },
  { key: "availabilityStatus", label: "Status" },
  { key: "minimumOrderQuantity", label: "Min. Order Qty", className: "text-right" },
  { key: "sku", label: "SKU" },
  { key: "warrantyInformation", label: "Warranty" },
];

export const filterAbleProductsColumns = [
  { key: "title", label: "Title" },
  { key: "brand", label: "Brand" },
  { key: "category", label: "Category" },
];
