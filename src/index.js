import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import "./assets/css/styles.css";
import "./assets/css/layers.css";
import "./assets/css/nav.css";
import "./assets/css/chart.css";

import App from "./App";
import Nav from "./Nav";
import IPAChart from "./IPAChart.js";
import Layout from "./Layout.js";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <div className="vcontainer">
                <Nav className="header" />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/IPAChart" element={<IPAChart />} />
                        <Route path="/Keyboard" element={<Layout />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="left">
                            &copy; 2025 Emily P.
                        </div>
                        <div className="right">
                            About
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </StrictMode>
);
