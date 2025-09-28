
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectCard } from '@/components/ProjectCard';

const categories = ["All", "React", "TypeScript", "Python", "Java", "Spring", "Node.js", "MySQL", "MongoDB", "AI"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.tags.includes(activeCategory));

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="section-container">
        <h2 className="section-title text-center mb-12 pb-3 after:left-1/2 after:-translate-x-1/2">
          My Projects
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of my main projects
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full px-4"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-md" asChild>
            <a href="https://github.com/miguelcondesantos" target="_blank" rel="noopener noreferrer">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
