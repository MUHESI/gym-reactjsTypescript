import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import App from "./App.tsx";
// import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename="/">
    <RecoilRoot>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
);
