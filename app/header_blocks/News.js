import React from "react"
import { motion } from "framer-motion";

const News = () => {
  return (
    <motion.div style={{width:'100%',height:'500px'}}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    >
      <h1 style={{textAlign:'center',fontSize:'60px'}}>В разработке!</h1>
    </motion.div>
  )
};

export default News;
