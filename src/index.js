import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import "./styles.css";
import "./layers.css";

import App from "./App";
import Nav from "./Nav";
import IPAChart from "./IPAChart.js";
import Layout from "./Layout.js";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/IPAChart" element={<IPAChart />} />
                <Route path="/Keyboard" element={<Layout />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
