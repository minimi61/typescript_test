import React from "react";
import Main from "./pages/Main";
import { Route, Routes } from 'react-router-dom'
import Detail from "./pages/Detail";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
