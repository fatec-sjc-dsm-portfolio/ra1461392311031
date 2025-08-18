import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Link2 } from 'lucide-react';

const BASE = import.meta.env.BASE_URL ?? '/';

// Project data (use template literals para incluir BASE)
const projects = [
  {
    id: 1,
    title: "Consulta-Vid",
    description: "A web app focused on Long Covid ...",
    image: `${BASE}images/consultavid.png`,
    repoUrl: "https://github.com/APIEquipe/EquipeTechEmpireAPI",
    tags: ["HTML", "CSS", "Python", "JavaScript", "Flask"]
  },
  {
    id: 2,
    title: "Asset Management System",
    description: "System to optimize business management ...",
    image: `${BASE}images/ativos.avif`,
    repoUrl: "https://github.com/BananaaScript/SGA",
    tags: ["Java", "TypeScript", "React", "Spring", "MySQL"]
  },
  {
    id: 3,
    title: "Meteorological Data Collector",
    description: "Environmental monitoring system ...",
    image: `${BASE}images/meteorologico.png`,
    repoUrl: "https://github.com/BananaScripts/Meteorological-Data-Collector",
    tags: ["TypeScript", "React", "Node.js", "MySQL", "Docker", "Google Cloud", "Supabase"]
  },
  {
    id: 4,
    title: "AI Agents Platform",
    description: "A platform for creating and managing personalized AI agents ...",
    image: `${BASE}images/agentia.png`,
    repoUrl: "https://github.com/BananaScripts/API_5-Semester",
    tags: ["TypeScript", "React", "Node.js", "MongoDB", "Docker", "AI", "Mobile"]
  },
  {
    id: 5,
    title: "Opin8",
    description: "A collaborative space site for participatory democracy ...",
    image: `${BASE}images/opin8.png`,
    siteURL: "https://opin8.com/",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "AI"]
  },
];

const placeholder = `${BASE}images/placeholder.svg`; // coloque placeholder.svg em public/images

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
          Here are some of my recent projects...
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
            <Card
              key={project.id}
              className="project-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    const t = e.currentTarget;
                    if (t.src !== placeholder) t.src = placeholder;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-portfolio-light-purple text-portfolio-dark-purple border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.siteURL && (
                  <Button size="sm" asChild>
                    <a href={project.siteURL} target="_blank" rel="noopener noreferrer">
                      <Link2 className="mr-2 h-4 w-4" />
                      Site
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
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
