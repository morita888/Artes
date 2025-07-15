const ramos = [
  // semestre, nombre, id, creditos, abre (ids de ramos)
  { semestre: 1, nombre: "Dibujo I", id: "dibujo1", abre: ["dibujo2"] },
  { semestre: 1, nombre: "Estética Clásica", id: "estetica1", abre: ["estetica2"] },
  { semestre: 1, nombre: "Teología", id: "teologia", abre: [] },
  { semestre: 1, nombre: "Historia del Arte I", id: "historia1", abre: ["historia2"] },
  { semestre: 1, nombre: "Fotografía", id: "foto", abre: ["tallerfoto"] },
  { semestre: 1, nombre: "Teoría del Color", id: "color", abre: ["tecnicas"] },
  { semestre: 1, nombre: "Humanidades", id: "humanidades", abre: [] },
  { semestre: 2, nombre: "Dibujo II", id: "dibujo2", abre: ["dibujo3"], req: ["dibujo1"] },
  { semestre: 2, nombre: "Estética Moderna", id: "estetica2", abre: ["estetica3", "semiotica1"], req: ["estetica1"] },
  { semestre: 2, nombre: "Constitución política", id: "constitucion", abre: [] },
  { semestre: 2, nombre: "Escritura", id: "escritura", abre: ["investigacion1"] },
  { semestre: 2, nombre: "Historia del Arte II", id: "historia2", abre: ["historia3"], req: ["historia1"] },
  { semestre: 2, nombre: "Taller de fotografía", id: "tallerfoto", abre: ["video"], req: ["foto"] },
  { semestre: 2, nombre: "Técnicas pictóricas", id: "tecnicas", abre: ["tridimension"], req: ["color"] },
  { semestre: 3, nombre: "Dibujo III", id: "dibujo3", abre: ["dibujo4"], req: ["dibujo2"] },
  { semestre: 3, nombre: "Estética contemporánea", id: "estetica3", abre: [], req: ["estetica2"] },
  { semestre: 3, nombre: "Semiótica I", id: "semiotica1", abre: ["semiotica2"], req: ["estetica2"] },
  { semestre: 3, nombre: "Historia del Arte III", id: "historia3", abre: ["historia4"], req: ["historia2"] },
  { semestre: 3, nombre: "Video", id: "video", abre: ["talleraudiovisual"], req: ["tallerfoto"] },
  { semestre: 3, nombre: "Introducción a la tridimensión", id: "tridimension", abre: ["escultura"], req: ["tecnicas"] },
  { semestre: 3, nombre: "Inglés I", id: "ingles1", abre: ["ingles2"] },
  { semestre: 4, nombre: "Dibujo IV", id: "dibujo4", abre: ["grabado1"], req: ["dibujo3"] },
  { semestre: 4, nombre: "Semiótica II", id: "semiotica2", abre: [], req: ["semiotica1"] },
  { semestre: 4, nombre: "Investigación en Artes I", id: "investigacion1", abre: ["investigacion2"], req: ["escritura"] },
  { semestre: 4, nombre: "Historia del arte IV", id: "historia4", abre: ["historialatam"], req: ["historia3"] },
  { semestre: 4, nombre: "Taller audiovisual", id: "talleraudiovisual", abre: [], req: ["video"] },
  { semestre: 4, nombre: "Escultura", id: "escultura", abre: [], req: ["tridimension"] },
  { semestre: 4, nombre: "Inglés II", id: "ingles2", abre: ["ingles3"], req: ["ingles1"] },
  { semestre: 5, nombre: "Grabado I", id: "grabado1", abre: ["grabado2"], req: ["dibujo4"] },
  { semestre: 5, nombre: "Imagen, dibujo y texto digital", id: "digital", abre: ["animado"] },
  { semestre: 5, nombre: "Investigación en Artes II", id: "investigacion2", abre: ["proyectos"], req: ["investigacion1"] },
  { semestre: 5, nombre: "Historia del arte en Latinoamérica", id: "historialatam", abre: ["colombia"], req: ["historia4"] },
  { semestre: 5, nombre: "Narración Audiovisual", id: "narracion", abre: ["animacion"], req: [] },
  { semestre: 5, nombre: "Taller bidimensional", id: "bidi", abre: ["pintura"] },
  { semestre: 5, nombre: "Inglés III", id: "ingles3", abre: ["ingles4"], req: ["ingles2"] },
  { semestre: 6, nombre: "Grabado II", id: "grabado2", abre: [], req: ["grabado1"] },
  { semestre: 6, nombre: "Diseño Digital animado", id: "animado", abre: ["web"], req: ["digital"] },
  { semestre: 6, nombre: "Diseño de proyectos", id: "proyectos", abre: ["gestion"], req: ["investigacion2"] },
  { semestre: 6, nombre: "Historia del Arte en Colombia", id: "colombia", abre: [], req: ["historialatam"] },
  { semestre: 6, nombre: "Animación audiovisual", id: "animacion", abre: ["puesta"], req: ["narracion"] },
  { semestre: 6, nombre: "Taller de pintura", id: "pintura", abre: ["tridimensional"], req: ["bidi"] },
  { semestre: 6, nombre: "Electiva", id: "electiva1", abre: [] },
  { semestre: 7, nombre: "Ética", id: "etica", abre: [] },
  { semestre: 7, nombre: "Diseño web", id: "web", abre: [], req: ["animado"] },
  { semestre: 7, nombre: "Gestión Cultural", id: "gestion", abre: [], req: ["proyectos"] },
  { semestre: 7, nombre: "Anteproyecto de grado", id: "anteproyecto", abre: ["practica", "proyecto"] },
  { semestre: 7, nombre: "Puesta en Escena", id: "puesta", abre: ["montaje"], req: ["animacion"] },
  { semestre: 7, nombre: "Taller tridimensional", id: "tridimensional", abre: ["escultura2"], req: ["pintura"] },
  { semestre: 7, nombre: "Inglés IV", id: "ingles4", abre: [], req: ["ingles3"] },
  { semestre: 8, nombre: "Practica en Artes", id: "practica", abre: [], req: ["anteproyecto"] },
  { semestre: 8, nombre: "Proyecto de grado", id: "proyecto", abre: [], req: ["anteproyecto"] },
  { semestre: 8, nombre: "Montaje Audiovisual", id: "montaje", abre: [], req: ["puesta"] },
  { semestre: 8, nombre: "Taller de Escultura", id: "escultura2", abre: [], req: ["tridimensional"] },
  { semestre: 8, nombre: "Electiva", id: "electiva2", abre: [] },
];

// Estado dinámico
const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    if (!ramo.req || ramo.req.length === 0) div.classList.remove("bloqueado");

    div.onclick = () => {
      if (!div.classList.contains("bloqueado")) {
        div.classList.toggle("aprobado");
        const aprobado = div.classList.contains("aprobado");
        if (aprobado) {
          aprobados.add(ramo.id);
        } else {
          aprobados.delete(ramo.id);
        }
        actualizarDisponibilidad();
      }
    };

    contenedor.appendChild(div);
  });
}

function actualizarDisponibilidad() {
  ramos.forEach((ramo) => {
    const div = document.getElementById(ramo.id);
    if (!ramo.req || ramo.req.length === 0) return;

    const habilitado = ramo.req.every((r) => aprobados.has(r));
    if (habilitado) {
      div.classList.remove("bloqueado");
    } else {
      if (!div.classList.contains("aprobado")) {
        div.classList.add("bloqueado");
      }
    }
  });
}

crearMalla();
