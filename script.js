// Lista de libros simulada
const libros = [
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", enlace: "#" },
  { titulo: "La Celestina", autor: "Fernando de Rojas", enlace: "#" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", enlace: "#" },
  { titulo: "El Príncipe", autor: "Nicolás Maquiavelo", enlace: "#" },
  { titulo: "La Ilíada", autor: "Homero", enlace: "#" }
];

// Función para buscar libros
function searchBooks() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const resultados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(input) || libro.autor.toLowerCase().includes(input)
  );

  if (resultados.length > 0) {
    resultados.forEach(libro => {
      const libroDiv = document.createElement("div");
      libroDiv.classList.add("result-item");
      libroDiv.innerHTML = `
        <h3>${libro.titulo}</h3>
        <p>Autor: ${libro.autor}</p>
        <a href="${libro.enlace}" target="_blank">Descargar PDF</a>
      `;
      resultsDiv.appendChild(libroDiv);
    });
  } else {
    resultsDiv.innerHTML = "<p>No se encontraron libros.</p>";
  }
}
