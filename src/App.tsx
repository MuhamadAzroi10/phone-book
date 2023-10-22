import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./layouts/LandingPage";
import Dashboard from "./layouts/Dashboard";
import TambahContact from "./layouts/TambahContact";
import EditContact from "./layouts/EditContact";
import TambahContact2 from "./layouts/TambahContact2";
import DetailContact from "./layouts/DetailContact";
import EditContact2 from "./layouts/EditContact2";
import DetailContact2 from "./layouts/DetailContact2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add_contact/v1" element={<TambahContact />} />
          <Route path="/add_contact/v2" element={<TambahContact2 />} />
          <Route path="/edit_contact/:id" element={<EditContact />} />
          <Route path="/edit_contact/nomor/:id" element={<EditContact2 />} />
          <Route path="/detail_contact/:id" element={<DetailContact />} />
          <Route
            path="/detail_contact/favorit/:id"
            element={<DetailContact2 />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
