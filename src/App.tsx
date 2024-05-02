import { Routes, Route } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "routes/Home";
import Products from "routes/Products";
import Layout from "routes/Layout";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="App h-max min-h-screen bg-gradient-to-b from-blue-50 via-blue-400 to-blue-200">
        <div className="flex flex-col grow md:flex-row max-w-[1180px] justify-between m-auto px-4 py-4 md:py-14 header-bg">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
