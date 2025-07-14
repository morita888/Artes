const filas = [
  [ "Dibujo I (3 Créditos)", "Dibujo II (3 Créditos)", "Dibujo III (3 Créditos)", "Dibujo IV (3 Créditos)", "Grabado I (2 Créditos)", "Grabado II (2 Créditos)", "Ética (2 Créditos)", "Práctica en Artes (5 Créditos)" ],
  [ "Estética Clásica (2 Créditos)", "Estética Moderna (2 Créditos)", "Estética contemporánea (2 Créditos)", "Semiótica II (2 Créditos)", "Imagen, dibujo y texto digital (3 Créditos)", "Diseño Digital animado (3 Créditos)", "Diseño web (3 Créditos)", "Proyecto de grado (4 Créditos)" ],
  [ "Teología (2 Créditos)", "Constitución política (2 Créditos)", "Semiótica I (2 Créditos)", "Investigación en Artes I (3 Créditos)", "Investigación en Artes II (3 Créditos)", "Diseño de proyectos (2 Créditos)", "Gestión Cultural (2 Créditos)", "Montaje Audiovisual (3 Créditos)" ],
  [ "Historia del Arte I (3 Créditos)", "Escritura en el contexto (2 Créditos)", "Historia del Arte III (3 Créditos)", "Historia del arte IV (2 Créditos)", "Historia del arte en Latinoamérica (2 Créditos)", "Historia del Arte en Colombia (2 Créditos)", "Anteproyecto de grado (3 Créditos)", "Taller de Escultura (3 Créditos)" ],
  [ "Fotografía (3 Créditos)", "Historia del Arte II (3 Créditos)", "Video (3 Créditos)", "Taller audiovisual (3 Créditos)", "Narración Audiovisual (3 Créditos)", "Animación audiovisual (3 Créditos)", "Puesta en Escena (3 Créditos)", "Electiva (3 Créditos)" ],
  [ "Teoría del Color (3 Créditos)", "Taller de fotografía (3 Créditos)", "Introducción a la tridimensión (3 Créditos)", "Escultura (3 Créditos)", "Taller bidimensional (3 Créditos)", "Taller de pintura (3 Créditos)", "Taller tridimensional (3 Créditos)", "" ],
  [ "Humanidades (2 Créditos)", "Técnicas pictóricas (3 Créditos)", "Inglés I (2 Créditos)", "Inglés II (2 Créditos)", "Inglés III (2 Créditos)", "Electiva (3 Créditos)", "Inglés IV (2 Créditos)", "" ]
];

const container = document.getElementById("grid-container");

filas.forEach(fila => {
  fila.forEach(materia => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = materia;
    cell.addEventListener("click", () => {
      cell.classList.toggle("active");
    });
    container.appendChild(cell);
  });
});
