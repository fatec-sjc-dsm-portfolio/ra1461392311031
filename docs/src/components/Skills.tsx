import React from 'react';
import { techCategories, hardSkillsCategories } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title pb-3 mb-8 text-center after:left-1/2 after:-translate-x-1/2">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
            These are the technologies I work with to build robust 
            and scalable applications with great user experiences.
          </p>
          
          <div className="space-y-12">
            {techCategories.map((category, categoryIndex) => (
              <div key={category.name} className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.tech.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div 
                        key={tech.name}
                        className="flex flex-col items-center p-5 rounded-lg bg-white dark:bg-secondary shadow-md hover:shadow-lg transition-all opacity-0 animate-fade-in"
                        style={{ animationDelay: `${(categoryIndex * 5 + index) * 100}ms`, borderTop: `3px solid ${tech.color}` }}
                      >
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground dark:text-gray-200" style={{ color: tech.color }}>
                            <Icon size={32} />
                          </div>
                        </div>
                        <h3 className="font-medium text-center">{tech.name}</h3>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title pb-3 mb-8 mt-20 text-center after:left-1/2 after:-translate-x-1/2">Hard Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
            Beyond technologies, these are the skills and concepts I apply to build high-quality software.
          </p>

          <div className="space-y-12">
            {hardSkillsCategories.map((category, categoryIndex) => (
              <div key={category.name} className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className="flex flex-col items-center p-5 rounded-lg bg-white dark:bg-secondary shadow-md hover:shadow-lg transition-all opacity-0 animate-fade-in"
                        style={{ animationDelay: `${(categoryIndex * 5 + index) * 100}ms`, borderTop: `3px solid ${skill.color}` }}
                      >
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-foreground dark:text-gray-200" style={{ color: skill.color }}>
                            <Icon size={32} />
                          </div>
                        </div>
                        <h3 className="font-medium text-center">{skill.name}</h3>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
