import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { StrictMode } from "react";
import { store, persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </PersistGate>
);
