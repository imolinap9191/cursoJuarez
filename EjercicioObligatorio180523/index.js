// Crear el contenedor div
const divImg = document.createElement('div');
divImg.id = 'img';
document.body.appendChild(divImg);


// Función asincrónica para obtener y mostrar las imágenes
async function fetchAndDisplayImages() {
  try {
    // Realizar el fetch a la API
    const response = await fetch('https://rickandmortyapi.com/api/character');
    
    const data = await response.json();

    // Iterar sobre los resultados
    for (const result of data.results) {
      // Obtener la URL de la imagen, nombre, especie y sexo del personaje
      const imageUrl = result.image;
      const nameUrl = result.name;
      const speciesUrl = result.species;
      const genderUrl = result.gender;

      // Crear un nuevo elemento de imagen + agregarle etiquetas de parrafo para incluir los nombres, especies y sexo del personaje
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      
      const nameElement = document.createElement('p');
      nameElement.textContent = nameUrl;

      const speciesElement = document.createElement('p');
      speciesElement.textContent = speciesUrl;

      const genderElement = document.createElement('p');
      genderElement.textContent = genderUrl;
      
      // Agregar la imagen al contenedor div junto con los demas detos
      divImg.appendChild(imgElement);
      divImg.appendChild(nameElement);
      divImg.appendChild(speciesElement);
      divImg.appendChild(genderElement);
    }
  } //capturar el error ante alguna falla
  catch (error) {
    console.error(error, "no se pudo resolver la peticion a la API");
  }
}

// Llamar a la función creada
fetchAndDisplayImages();
