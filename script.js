// Unsplash API

const count = 10;
const apiKey = 'Ub7egDXoTdJ06VcasRvTARnYtjxG7Oaz1tr8S4d5pRM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // catch error here 
    };
};

// On Load

getPhotos();
