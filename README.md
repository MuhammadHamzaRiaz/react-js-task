# 📄 Project Documentation - ASTUDIO Assessment App

## 📌 Overview
This project is a **React + Redux Toolkit** based e-commerce application built with **TypeScript**, **Vite**, and **TailwindCSS**. It fetches products and user data from an API and provides filtering, searching, and pagination features.

## 🚀 Tech Stack
- **React 19** (UI Framework)
- **Redux Toolkit** (State Management)
- **React Router** (Routing)
- **Axios** (API Calls)
- **Tailwind CSS** (Styling)
- **Vite** (Build Tool)
- **TypeScript** (Type Safety)

---

## 🔧 Setup & Installation
### 📦 Prerequisites
- Node.js `>=16.x`
- NPM or Yarn

### 📥 Install Dependencies
```sh
npm install
# OR
yarn install
```

### 🚀 Run Development Server
```sh
npm run dev
# OR
yarn dev
```

### 🏗️ Build for Production
```sh
npm run build
```

---

## 🔌 API Usage & Limitations
This project uses **DummyJSON API** for fetching products and users. However, **DummyJSON does not support proper filtering for all fields**.

### 🚨 Filtering Limitations
- **Brand & Title Filtering** → DummyJSON **does not support direct filtering**.
  - Instead, we use a **search query** (`/search?q=`) to find products by brand or title.
- **Category Filtering** → DummyJSON **supports category filtering** using the `/category/{categoryName}` endpoint.

---

## 🎨 UI Styling
- Uses **Tailwind CSS** for styling.
- Responsive and accessible UI.
