import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import { Home } from "./pages/home/Home";
import { NotFoundPage } from "./pages/not-found-page/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
