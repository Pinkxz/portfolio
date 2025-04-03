import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills))
      .catch((error) => console.error("Erro ao carregar skills:", error));
  }, []);

  return (
    <section id="skills" className="py-10 text-center">
      <h1 className="text-3xl font-bold">Habilidades</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg text-white flex flex-col items-center w-24 h-24 md:w-32 md:h-32 overflow-hidden">
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="max-w-full max-h-full object-contain" 
              style={{ width: "50px", height: "50px" }}
            />
            <p className="text-xs md:text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
