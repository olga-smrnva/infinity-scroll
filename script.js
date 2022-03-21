const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArr = [];

// Unsplash API
const count = 10;
const apiKey = 'fxE05agHQAIi0hNLkyyENnSN5w73yp6V_RP-CTpgPvk';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	};
};

// Create Elements for Links&Photos, add to DOM
function displayPhotos() {
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
		// console.log(photosArr);
	} catch (error) {
		// catch error here 
	};
};

// On Load
getPhotos();
