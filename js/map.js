// Initialize the map
const map = L.map('map').setView([-26.2041, 28.0473], 13); // Example: Johannesburg, SA

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add marker for Sunshine Shelter Home
const marker = L.marker([-26.2041, 28.0473]).addTo(map);
marker.bindPopup("<b>Sunshine Shelter Home</b><br>We rescue and care for animals.").openPopup();
