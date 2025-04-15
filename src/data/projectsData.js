// Importa todas las imágenes de presentación
import project1Presentation from '../assets/projects/project1/presentation.jpg';
import project2Presentation from '../assets/projects/project2/presentation.jpg';
import project3Presentation from '../assets/projects/project3/presentation.jpg';

// Importa las imágenes de detalle (deberías agregar cada imagen manualmente)
import project1Detail1 from '../assets/projects/project1/detail.jpg';
import project1Detail2 from '../assets/projects/project1/detail3.jpg';
import project1Detail3 from '../assets/projects/project1/detail4.jpg';
import project1Detail4 from '../assets/projects/project1/detail5.jpg';
import project1Detail5 from '../assets/projects/project1/detail6.jpg';



// Repite esto para cada imagen de detalle que quieras importar

import project2Detail1 from '../assets/projects/project2/detail.jpg';
import project2Detail2 from '../assets/projects/project2/detail2.jpg';
import project2Detail3 from '../assets/projects/project2/detail3.webp';
import project2Detail4 from '../assets/projects/project2/detail4.webp';
import project2Detail5 from '../assets/projects/project2/detail5.webp';


// Lo mismo para project3...

// Puedes ahora definir las imágenes de detalle manualmente
const project1Details = [project1Detail1, project1Detail2, project1Detail3, project1Detail4, project1Detail5];
const project2Details = [project2Detail1, project2Detail2, project2Detail3, project2Detail4, project2Detail5];

const projectsData = [
  {
    id: 1,
    title: "Codex",
    description: "Sistema de gestión de datos para cooperativa constructora.",
    largeDescription: `
      <p>Este proyecto surgió en base a unas pasantias...</p>
      <!-- El resto de la descripción aquí -->
    `,
    technologies: ["ReactJS", "Bootstrap", "SpringBoot", "JavaScript", "HTML/CSS", "JWT"],
    images: {
      presentation: project1Presentation,
      details: project1Details
    },
    repoUrl: "",
    demoUrl: ""
  },
  {
    id: 2,
    title: "ReVi",
    description: "Registro Virtual de asistencias de alumnos.",
    largeDescription: `
      <p>Este es un proyecto escolar en grupo...</p>
      <!-- El resto de la descripción aquí -->
    `,
    technologies: ["ReactJS", "Bootstrap", "SpringBoot", "JavaScript", "HTML/CSS", "JWT"],
    images: {
      presentation: project2Presentation,
      details: project2Details
    },
    repoUrl: "",
    demoUrl: ""
  },
  {
    id: 3,
    title: "LED Controller",
    description: "Controlador de LEDs para control de stock en fábrica.",
    largeDescription: `
      <p>Se me encomendó para una fábrica...</p>
      <!-- El resto de la descripción aquí -->
    `,
    technologies: ["JavaScript", "ReactJS", "C++", "Websockets", "ESP8266", "HTML/CSS"],
    images: {
      presentation: project3Presentation  
      /* details: project3Details */
    },
    repoUrl: "https://github.com/Ezeliam/controlador_LED",
    demoUrl: ""
  }
];

export default projectsData;
