export const GA_TRACKING_ID = 'UA-XXXXXXXXX-X';

// Registro de página vista
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
