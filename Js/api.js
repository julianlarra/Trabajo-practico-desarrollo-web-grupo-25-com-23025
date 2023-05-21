// Función para obtener las imágenes y descripciones de la API
function fetchArtworks() {
    // IDs de las imágenes que deseas mostrar
    const artworkIds = ['27992', '28560',  '67890',  '14598', '20684', '109780','14620', '28560'];

    // URL de la API para obtener información de los artworks
    const apiUrl = `https://api.artic.edu/api/v1/artworks?ids=${artworkIds.join(',')}&fields=id,image_id,title,description`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const galeriaContainer = document.getElementById('galeria');

            // Recorrer los datos de los artworks y crear las imágenes con descripciones
            data.data.forEach(artwork => {
                const imageId = artwork.image_id;
                const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
                const title = artwork.title;
                const description = artwork.description;

                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                imageElement.alt = title;

                const artworkContainer = document.createElement('div');
                artworkContainer.classList.add('artwork');

                const titleElement = document.createElement('h2');
                titleElement.textContent = title;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = description;

                artworkContainer.appendChild(imageElement);
                artworkContainer.appendChild(titleElement);
                artworkContainer.appendChild(descriptionElement);

                galeriaContainer.appendChild(artworkContainer);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Llamar a la función para obtener las imágenes al cargar la página
window.addEventListener('load', fetchArtworks);
