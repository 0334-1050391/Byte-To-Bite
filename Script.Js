// Simple script to embed Google Maps iframe for local SEO and customer convenience

window.addEventListener('DOMContentLoaded', () => {
  const mapDiv = document.getElementById('map');
  const mapIframe = document.createElement('iframe');
  mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019143040503!2d-122.41941548468137!3d37.77492927975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f0a6eab%3A0x4d0a4d8b0a3a7c1f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617761234567!5m2!1sen!2sus";
  mapIframe.width = "100%";
  mapIframe.height = "300";
  mapIframe.style.border = "0";
  mapIframe.allowFullscreen = "";
  mapIframe.loading = "lazy";
  mapDiv.appendChild(mapIframe);
});
