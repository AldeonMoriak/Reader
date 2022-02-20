import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reader from "./pages/reader/Reader";
import "./index.css";
import App from "./App";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="reader" element={<Reader name="Aldeon" />} />
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
