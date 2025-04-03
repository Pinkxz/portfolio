import { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Projeto 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Projeto 2", description: "Descrição do projeto 2" },
    { id: 3, name: "Projeto 3", description: "Descrição do projeto 3" },
    { id: 4, name: "Projeto 4", description: "Descrição do projeto 4" },
    { id: 5, name: "Projeto 5", description: "Descrição do projeto 5" },
  ]);

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
