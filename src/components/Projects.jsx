import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Erro ao carregar projetos:", error));
  }, []);

  useEffect(() => {
    if (selectedProject) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = selectedProject.images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % selectedProject.images.length;
          return selectedProject.images[nextIndex];
        });
      }, 5000); // Troca a cada 3 segundos

      return () => clearInterval(interval); // Limpa o intervalo ao fechar o modal
    }
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImage(project.images[0]); // Define a primeira imagem como padrão
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
                  className={`thumbnail ${currentImage === image ? "active" : ""}`} // Adiciona a classe "active"
                  onClick={() => setCurrentImage(image)}
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