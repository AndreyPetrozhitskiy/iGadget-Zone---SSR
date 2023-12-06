import React from "react"
import '../../style/notfound.scss'
import error from '../../image/404.png'
import { motion } from "framer-motion";
const NotFaundPage = () => {
  return (
    <motion.div className="notFound"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    >
        <div className="notFound-block">
            <img src={error} />
            <p>Страница не найдена</p>
        </div>
      
    </motion.div>
  )
};

export default NotFaundPage;
