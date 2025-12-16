import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { NetworkSecurityPage } from "./pages/NetworkSecurity.jsx";
import { CloudSecurityPage } from "./pages/CloudSecurity.jsx";
import { SecurityOperationPage } from "./pages/SecurityOperation.jsx";
import { EnterpriseSecurityPage } from "./pages/EnterpriseSecurity.jsx";
import { IAMPage } from "./pages/IAM.jsx";
import { SOCServicesPage } from "./pages/SOCServices.jsx";
import { CybersecurityServicesPage } from "./pages/CybersecurityServices.jsx";
import { IOTSecurityPage } from "./pages/IOTSecurity.jsx";
import { DataSecurityPage } from "./pages/DataSecurity.jsx";
import { ApplicationSecurityPage } from "./pages/ApplicationSecurity.jsx";
import { NGFWPage } from "./pages/NGFW.jsx";
import { SASEZTNAPage } from "./pages/SASEZTNA.jsx";
import { XDRPage } from "./pages/XDR.jsx";
import { SOARPage } from "./pages/SOAR.jsx";
import { SIEMPage } from "./pages/SIEM.jsx";
import { CNAPPPage } from "./pages/CNAPP.jsx";
import { DevSecOpsPage } from "./pages/DevSecOps.jsx";
import { DLPPage } from "./pages/DLP.jsx";
import { DSPMPage } from "./pages/DSPM.jsx";
import { OTIoTSecurityPage } from "./pages/OTIoTSecurity.jsx";
import { IAMProductPage } from "./pages/IAMProduct.jsx";
import { CareerPage } from "./pages/Career.jsx";
import "./index.css";

const storedTheme = (() => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
})();
const initialTheme =
  storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
const rootEl = document.documentElement;
rootEl.classList.remove("dark");
if (initialTheme === "dark") {
  rootEl.classList.add("dark");
}
try {
  localStorage.setItem("theme", initialTheme);
} catch {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/network-security" element={<NetworkSecurityPage />} />
        <Route path="/cloud-security" element={<CloudSecurityPage />} />
        <Route path="/security-operation" element={<SecurityOperationPage />} />
        <Route
          path="/enterprise-security"
          element={<EnterpriseSecurityPage />}
        />
        <Route path="/iam" element={<IAMPage />} />
        <Route path="/soc-services" element={<SOCServicesPage />} />
        <Route
          path="/cybersecurity-services"
          element={<CybersecurityServicesPage />}
        />
        <Route path="/iot-security" element={<IOTSecurityPage />} />
        <Route path="/data-security" element={<DataSecurityPage />} />
        <Route
          path="/application-security"
          element={<ApplicationSecurityPage />}
        />
        <Route path="/ngfw" element={<NGFWPage />} />
        <Route path="/sase-ztna" element={<SASEZTNAPage />} />
        <Route path="/xdr" element={<XDRPage />} />
        <Route path="/soar" element={<SOARPage />} />
        <Route path="/siem" element={<SIEMPage />} />
        <Route path="/cnapp" element={<CNAPPPage />} />
        <Route path="/devsecops" element={<DevSecOpsPage />} />
        <Route path="/dlp" element={<DLPPage />} />
        <Route path="/dspm" element={<DSPMPage />} />
        <Route path="/ot-iot-security" element={<OTIoTSecurityPage />} />
        <Route path="/iam-product" element={<IAMProductPage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
