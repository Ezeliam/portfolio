import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; 
import projectsData from '../data/projectsData';
import Particle from '../components/Particle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/project.css';

const Project = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation("global"); 
  const project = projectsData.find(p => p.id === parseInt(id));

  console.log(project)

  // Obtener los datos traducidos del proyecto
  const translatedProjects = t('global.projects.projects', { returnObjects: true });

  const translatedProject = translatedProjects.find(p => p.title === project?.title);

  if (!project || !translatedProject) {
    return <div className="container py-5 text-center">{t('projects.notFound')}</div>;
  }

  const allImages = [project.images.presentation, ...project.images.details];

  // Función para renderizar la descripción con puntos
  const renderDescription = (descriptionObj) => {
    return (
      <>
        <p>{descriptionObj.intro}</p>
        {descriptionObj.points && (
          <ul>
            {descriptionObj.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        {descriptionObj.development && <p>{descriptionObj.development}</p>}
        {descriptionObj.achievement && <p>{descriptionObj.achievement}</p>}
        {descriptionObj.conclusion && <p>{descriptionObj.conclusion}</p>}
      </>
    );
  };

  return (
    <>
      <Particle/>
      <Header/>
      <div className="container-fluid project-page pt-5" id="scroll-container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="display-4 titulo">{translatedProject.title}</h1>
            <p className="lead">{translatedProject.description}</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <Carousel 
              fade 
              indicators={allImages.length > 1} 
              controls={allImages.length > 1}
              interval={5000}
              touch={true}
              pause={false}
              keyboard={true}
            >
              {allImages.map((img, index) => (
                <Carousel.Item key={index}>
                  <div className="slider-image-container">
                    <img
                      className="d-block w-100"
                      src={img}
                      alt={`${t('projects.imageAlt')} ${index + 1} ${translatedProject.title}`}
                      loading="lazy" 
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="mb-5">
              <h2 className="mb-4 titulo-sec">{t('global.projects.descriptiontitle')}</h2>
              <div className="project-description">
                {renderDescription(translatedProject.largeDescription)}
              </div>
            </div>

            <div className="mb-5">
              <h2 className="mb-4 titulo-sec">{t('global.projects.technologytitle')}</h2>
              <div className="d-flex flex-wrap gap-2">
                {translatedProject.technologies.map((tech, index) => (
                  <span key={index} className="badge tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.repoUrl || project.demoUrl) && (
              <div className="mb-5">
                <h2 className="mb-4 titulo-sec">Links</h2>
                <div className="d-flex gap-3">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-light"
                    >
                      <i className="bi bi-github me-2"></i>GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>Demo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='row'>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Project;