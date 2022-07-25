import { motion } from "framer-motion";
import React from "react";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import ServiceCard from "../Component/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col flex-grow pt-1 pc-6">
      <h5 className="p-2 my-3 font-medium">
        Hi, I am Shajib Hasan from Khulna, Bangladesh. I am a professional web
        developer providing these services for both the front end and back end.
        I can develop & design any kind of website or different kinds of web
        pages. I can create and fix issue based on these skills-- JavaScript ||
        ECMAScript || React js || Next js || Material-ui || React-bootstrap ||
        Firebase || Contentfull || Strapi & Commercejs.
      </h5>

      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500 ">
        <h6 className="my-3 text-xl font-bold tracking-wide ">What i offer</h6>
        <motion.div className="grid grid-cols-2 gap-6 " variants={stagger} initial="initial" animate="animate">
          {services.map((service, index) => (
            // eslint-disable-next-line react/jsx-key
            <motion.div variants={fadeInUp}  className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} key={index} />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </motion.div>
  );
};

export default index;
