import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import "./styles.css";

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
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
