import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import projects from "../text/Projects";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Client Work", "AI", "Personal"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full hover:cursor-pointer text-slate-900 transition-all duration-200 ${
                  filter === category
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : "border-slate-600 hover:border-cyan-500"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group h-full">
                  <CardContent className="p-6">
                    <div className="relative mb-4 px-1 overflow-hidden rounded-lg">
                      <motion.div transition={{ duration: 0.3 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-contain rounded-lg"
                        />
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>

                        <div className="space-x-2">
                          {project.category.map((category) => (
                            <Badge
                              key={category}
                              variant="outline"
                              className="border-cyan-500 text-cyan-400"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) =>
                          !tech.canHover ? (
                            <motion.div
                              key={tech.name + "" + techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: techIndex * 0.05,
                              }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-slate-700 text-slate-300"
                              >
                                {tech.name}
                              </Badge>
                            </motion.div>
                          ) : (
                            <div key={techIndex}>
                              <HoverCard>
                                <HoverCardTrigger
                                  asChild
                                  className="hover:cursor-default"
                                >
                                  <Badge
                                    variant="secondary"
                                    className="bg-slate-700 text-slate-300"
                                  >
                                    {tech.name}
                                  </Badge>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80 bg-slate-900/95 space-y-3">
                                  {tech.hover.map((subTech, index) => (
                                    <div
                                      key={index}
                                      className="flex justify-between gap-4"
                                    >
                                      <Avatar>
                                        <AvatarImage src={subTech.icon} />
                                        <AvatarFallback>
                                          {subTech.name.charAt(0)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div className="space-y-1">
                                        <h4 className="text-sm text-white font-semibold">
                                          {subTech.name}
                                        </h4>
                                        <p className="text-sm text-white/80">
                                          {subTech.desc}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </HoverCardContent>
                              </HoverCard>
                            </div>
                          )
                        )}
                      </div>

                      <div className="flex space-x-4 pt-4">
                        {project.github && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="bg-cyan-500 hover:bg-cyan-600 text-slate-900"
                            asChild
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
