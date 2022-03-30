const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0; 
let photosArr = [];
let initialLoad = true;

// Unsplash API
let count = 5;
const apiKey = 'Ub7egDXoTdJ06VcasRvTARnYtjxG7Oaz1tr8S4d5pRM';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function imageLoader() {
	imagesLoaded++;
	if (imagesLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
		initialLoad = false;
		count = 30;
	};
};

function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	};
};

// Create Elements for Links&Photos, add to DOM
function displayPhotos() {
	imagesLoaded = 0;
	totalImages = photosArr.length;

	photosArr.forEach((photo) => {
		//Create <a> to link to Unsplash
		const item = document.createElement('a');
		// item.setAttribute('href', photo.links.html);
		// item.setAttribute('target', '_blank');

		setAttributes(item, {
			href: photo.links.html,
			target: '_blank'
		});

		//Create <img> for photo
		const img = document.createElement('img');
		// img.setAttribute('src', photo.urls.regular);
		// img.setAttribute('alt', photo.alt_description);
		// img.setAttribute('title', photo.alt_description);

		setAttributes(img, {
			src: photo.urls.regular
		});

		img.addEventListener('load', imageLoader());

		//Put <img> inside <a>, then put both insied imageContainer element
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

// Get Photos from Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArr = await response.json();
		displayPhotos();
	} catch (error) {
		// catch error here 
	};
};

window.addEventListener('scroll', () => {
	if (window.innerHeight+ window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhotos();
	};
});

// On Load
getPhotos();