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
            <div className="flex flex-col pl-4">
                <Nav />
                <div className="min-h-[80vh] mt-2">
                    <Routes>
                        <Route path="/ipa-keyboard/index" element={<App />} />
                        <Route path="/ipa-keyboard/IPAChart" element={<IPAChart />} />
                        <Route path="/ipa-keyboard/Keyboard" element={<Layout />} />
                        <Route path="*" element={<Navigate to="/ipa-keyboard/IPAChart" />} />
                    </Routes>
                </div>
                <div className="flex gap-4 mb-4 mr-6 mt-8">
                    <div className="">&copy; 2025 Emily P.</div>
                    <div className="grow"></div>
                    <div className="">About</div>
                    <div className="">Contact</div>
                </div>
            </div>
        </BrowserRouter>
    </StrictMode>
);
