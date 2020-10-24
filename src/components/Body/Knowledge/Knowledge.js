import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";

import { motion } from "framer-motion";

const Knowledge = () => {
   const [active, setActive] = useState(false);
   // section will be visible on scroll
   useEffect(() => {
      window.addEventListener("scroll", () => {
         const position = document.querySelector(".knowledge");
         const topPosition = position.getBoundingClientRect();
         if (window.scrollY >= topPosition.top) {
            setActive(true);
         } else {
            setActive(false);
         }
      });
   }, [active]);

   return (
      <motion.div
         id="experience"
         className="knowledge"
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: active ? 1 : 0, y: active ? 0 : 30 }}
         transition={{
            opacity: { duration: 1, ease: "easeInOut" },
            y: { duration: 1, ease: "easeInOut" },
         }}
      >
         <div className="inner">
            <section>
               <div className="knowledge_header">
                  <h2>Technologies I Use</h2>
                  <div className="divider" />
               </div>
               <div className="details">
                  <Tabs />
               </div>
            </section>
         </div>
      </motion.div>
   );
};

export default Knowledge;
