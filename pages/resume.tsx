import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animation";
import Bar from "../Component/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* education */}
      <div className="grid gap-6 md:gird-cols-2 lg:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold ">
              Computer science Engineer
            </h5>
            <p className="font-semibold ">Academy of technology(2016-2022) </p>
            <p className="my-3 ">I Am currently job in BD E-commerce company</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold ">
              Computer science Engineer
            </h5>
            <p className="font-semibold ">Academy of technology(2016-2022) </p>
            <p className="my-3 ">I Am currently job in BD E-commerce company</p>
          </div>
        </motion.div>
      </div>

      {/* langues  */}
      <div className="grid gap-6 md:grid-cols lg:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">langues And Frameworks</h5>
          <div className="my-2 ">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        {/* Software */}
        <div>
          <h5 className="my-3 text-2xl font-bold">langues And Frameworks</h5>
          <div className="my-2 ">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
