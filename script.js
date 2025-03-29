// Sample property data
const properties = [
    {
        id: 1,
        type: 'sale',
        title: 'Modern Villa',
        price: '$500,000',
        location: 'Beverly Hills',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227'
    },
    {
        id: 2,
        type: 'rent',
        title: 'Luxury Apartment',
        price: '$2,500/month',
        location: 'Downtown',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
    },
    {
        id: 3,
        type: 'pc',
        title: 'Gaming Center',
        price: '$20/hour',
        location: 'Tech District',
        image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6'
    },
    {
        id: 4,
        type: 'sale',
        title: 'Beachfront House',
        price: '$750,000',
        location: 'Coastal Area',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
    },
    {
        id: 5,
        type: 'rent',
        title: 'Studio Apartment',
        price: '$1,200/month',
        location: 'City Center',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
    },
    {
        id: 6,
        type: 'pc',
        title: 'E-Sports Arena',
        price: '$25/hour',
        location: 'Gaming District',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e'
    }
    // Add more properties as needed
];

// Function to create property cards
function createPropertyCard(property) {
    return `
        <div class="property-card">
            <img src="${property.image}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p>${property.location}</p>
                <p class="price">${property.price}</p>
            </div>
        </div>
    `;
}

// Function to display properties
function displayProperties() {
    const propertyGrid = document.getElementById('propertyGrid');
    propertyGrid.innerHTML = properties
        .map(property => createPropertyCard(property))
        .join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProperties();
});

// Search functionality
const searchInput = document.querySelector('.search-container input');
const searchSelect = document.querySelector('.search-container select');
const searchButton = document.querySelector('.search-container button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const propertyType = searchSelect.value;
    
    const filteredProperties = properties.filter(property => {
        const matchesSearch = property.location.toLowerCase().includes(searchTerm) ||
                            property.title.toLowerCase().includes(searchTerm);
        const matchesType = propertyType === property.type;
        return matchesSearch && matchesType;
    });

    const propertyGrid = document.getElementById('propertyGrid');
    propertyGrid.innerHTML = filteredProperties
        .map(property => createPropertyCard(property))
        .join('');
}); 