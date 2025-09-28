
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Link2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { placeholder } from '@/data/projects';

export const ProjectCard = ({ project, index }) => {
  return (
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
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-portfolio-light-purple text-portfolio-dark-purple border-0">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.siteURL && (
            <Button size="sm" asChild>
              <a href={project.siteURL} target="_blank" rel="noopener noreferrer">
                <Link2 className="mr-2 h-4 w-4" />
                Site
              </a>
            </Button>
          )}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
            </DialogHeader>
            <div>
              <h4 className="font-semibold mt-4 mb-2">Description</h4>
              <p className="text-muted-foreground">{project.description}</p>
              
              <h4 className="font-semibold mt-4 mb-2">My contributions:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-4">
                {project.contributions.map((contribution, i) => (
                  <li key={i}>{contribution}</li>
                ))}
              </ul>

              <h4 className="font-semibold mt-4 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-portfolio-light-purple text-portfolio-dark-purple border-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
