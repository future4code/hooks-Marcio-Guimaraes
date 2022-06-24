import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage/AdminHomePage.js";
import { ApplicationFormPage } from "../pages/ApplicationFormPage/ApplicationFormPage.js";
import { CreateTripPage } from "../pages/CreateTripPage/CreateTripPage.js";
import { HomePage } from "../pages/HomePage/index.js";
import { ListTripsPage } from "../pages/ListTripsPage/ListTripsPage.js";
import { LoginPage } from "../pages/LoginPage/LoginPage.js";
import { TripDetailsPage } from "../pages/TripDetailsPage/TripDetailsPage.js";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
