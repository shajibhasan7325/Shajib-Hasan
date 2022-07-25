import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import ProjectCard from "../Component/ProjectCart";
import ProjectsNavbar from "../Component/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div variants={stagger} initial="initial" animate="animate" className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <motion.div variants={fadeInUp}  className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={project.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
