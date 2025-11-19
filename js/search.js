// Example dynamic services data
const servicesData = [
    { title: "Dog Adoption", description: "Find your new furry friend.", image: "images/home-dog.jpg" },
    { title: "Cat Adoption", description: "Give a home to a rescued cat.", image: "images/adopt-cat.jpg" },
    { title: "Volunteer Programs", description: "Help us care for animals.", image: "images/volunteer.jpg" },
    { title: "Fundraising Events", description: "Support our shelter through events.", image: "images/about-shelter.jpg" }
];

const servicesContainer = document.getElementById('services-container');
const searchInput = document.getElementById('service-search');

// Function to render services
function renderServices(services) {
    servicesContainer.innerHTML = "";
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}" />
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesContainer.appendChild(serviceCard);
    });
}

// Initial render
renderServices(servicesData);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredServices = servicesData.filter(service =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query)
    );
    renderServices(filteredServices);
});
