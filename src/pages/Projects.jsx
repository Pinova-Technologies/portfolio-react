import React from 'react';
import { Button } from '../components/ui/button';
import Tool from './Tool';

function Projects() {
  return (
    <div >
      <div className=" bg-[#292929] w-full min-h-screen">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="project-list flex justify-around pt-[80px]">
          <div className="project-item">

            <a href="https://link-to-project-1.com" target="_blank" rel="noopener noreferrer">
              <Button variant="newVariant">HTML/CSS</Button>
            </a>
          </div>
          <div className="project-item">

            <a href="https://link-to-project-2.com" target="_blank" rel="noopener noreferrer">
              <Button variant="newVariant">JAVASCRIPT</Button>
            </a>
          </div>
          <div className="project-item">

            <a href="https://link-to-project-3.com" target="_blank" rel="noopener noreferrer">
              <Button variant="newVariant">API</Button>
            </a>
          </div>
          <div className="project-item">

            <a href="https://link-to-project-3.com" target="_blank" rel="noopener noreferrer">
              <Button variant="newVariant">REACT</Button>
            </a>
          </div>
          {/* Add more projects as needed */}
        </div>

        <div className='project-list flex justify-around pt-12'>
          <div className="project-item">

            <a href="https://link-to-project-3.com" target="_blank" rel="noopener noreferrer">
              <Button variant="newVariant">REACT</Button>
            </a>
          </div>
          <div className="project-item">

            <a href="https://link-to-project-3.com" target="_blank" rel="noopener noreferrer">
              <Button variant="newVariant">REACT</Button>
            </a>
          </div>
        </div>
        <Tool />
      </div>
    </div>
  );
}

export default Projects;