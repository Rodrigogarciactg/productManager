import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./components/Detail";
import Update from "./components/Update";
// import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/products" />
          <Route element={<Detail />} path="/products/:id" />
          <Route element={<Update />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
