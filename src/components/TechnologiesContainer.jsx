import {
  DiDocker,
  DiMongodb,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiGit,
  DiAws,
} from "react-icons/di";
import { SiTypescript, SiRabbitmq, SiDotnet } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "mongoDB", name: "MongoDB", icon: <DiMongodb /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "git", name: "GIT", icon: <DiGit /> },
  { id: "rabbitmq", name: "RabbitMQ", icon: <SiRabbitmq /> },
  { id: "aws", name: "Aws", icon: <DiAws /> },
  { id: "dotnet", name: ".NET", icon: <SiDotnet /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h4>{tech.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
