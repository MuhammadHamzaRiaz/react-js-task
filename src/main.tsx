import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// components
import App from "./App.tsx";
// store
import { Provider } from "react-redux";
import { store } from "./redux/store";
// styles
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
