
import { Button } from '../components/ui/button';
import Tool from './Tool';
import projects from '../data/projects.json'; // Import the JSON data

function Projects() {
  return (
    <div>
      <div className="bg-[#292929] w-full min-h-screen">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="project-list flex justify-around pt-[80px]">
          {projects.slice(0, 4).map((project, index) => (
            <div className="project-item" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="newVariant">{project.name}</Button>
              </a>
            </div>
          ))}
        </div>
        <div className="project-list flex justify-around pt-12">
          {projects.slice(4).map((project, index) => (
            <div className="project-item" key={index + 3}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="newVariant">{project.name}</Button>
              </a>
            </div>
          ))}
        </div>
        <Tool />
      </div>
    </div>
  );
}

export default Projects;