const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Accessing Unsplash API

const count = 10;
const query = 'cute animal';
const apiKey = 'ghQQMXVZNIzYarSmCP3HWBQeQcae4fp7qRet28mi5R4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}`;

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photos
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}



// Function to get photos from Unsplash API limited to 50 per hour.
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
    }
}

getPhotos();
