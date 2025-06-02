import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    fetch("./projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Erro ao carregar projetos:", error));
  }, []);

  useEffect(() => {
    if (selectedProject) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
      }, 7500);
      return () => clearInterval(interval);
    }
  }, [selectedProject]); 

  useEffect(() => {
    if (selectedProject) {
      setCurrentImage(selectedProject.images[imageIndex]);
    }
  }, [imageIndex, selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImage(project.images[0]);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold">Meus Projetos</h2>
      <div className="grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => openProject(project)}>
            <img src={project.images[0]} alt={project.name} />
            <h3>{project.name}</h3>
            <div className="overlay">+ Ver mais informações</div>
          </div>
        ))}
      </div>

      {/* Bloco de detalhes */}
      {selectedProject && (
        <div className="project-details">
          <button className="close-btn" onClick={closeProject}>X</button>

          {/* Descrição do projeto */}
          <div className="project-description">
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <button className="redirect"onClick={() => window.open(selectedProject.link, '_blank')}>Code</button>
          </div>
           {/* Stack utilizada */}
          <div className="project-stack">
            <h2>Tecnologias Utilizadas:</h2>
            <ul>
              {selectedProject.stack.map((tech, index) => (
                <p className="stack-item" key={index}>{tech}</p>
              ))}
            </ul>
          </div>

          {/* Imagem principal + Miniaturas */}
          <div className="project-image-container">
            <img src={currentImage} alt="Imagem do projeto" className="project-image" />

            {/* Miniaturas das imagens */}
            <div className="project-thumbnails">
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index}`}
                  className={`thumbnail ${currentImage === image ? "active" : ""}`}
                  onClick={() => {
                    setCurrentImage(image);
                    setImageIndex(index);
                  }}
                />
              ))}
            </div>
          </div>


        </div>
      )}
    </section>
  );
}

export default Projects;