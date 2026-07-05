import "./styles.css";
import "./nav.js";

// Create dataLayer FIRST
window.dataLayer = window.dataLayer || [];
window.gtag = function () {
  window.dataLayer.push(arguments);
};

// Load gtag script
const script = document.createElement("script");
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-F2CBZHQXX1";

// Optional but cleaner: wait for script before config
script.onload = () => {
  window.gtag("js", new Date());
  window.gtag("config", "G-F2CBZHQXX1", {
    page_path: window.location.pathname,
  });
};

document.head.appendChild(script);
