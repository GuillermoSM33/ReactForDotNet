import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./form/List/list";
import Add from "./form/Add/add";
import Edit from "./form/Edit/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;