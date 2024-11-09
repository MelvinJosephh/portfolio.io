import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home">
      <div className="container flex">
        <div class="icon-container">
          <i class="fas fa-network-wired"></i>
        </div>
        <motion.div
          className="left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.div
            className="background-animation"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="right topMargin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="welcome-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          >
            Welcome to <span>AberRange</span>
          </motion.h1>
          <motion.p
            className="intro"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          >
            Empowering a smarter, connected world with advanced tech solutions
            that simplify and enhance life and business.
          </motion.p>

          <motion.div
            className="socialIcons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            <motion.i
              className="fab fa-facebook-f facebook"
              whileHover={{ scale: 1.2, color: "#1877F2" }}
            />
            <motion.i
              className="fab fa-instagram instagram"
              whileHover={{ scale: 1.2, color: "#C13584" }}
            />
            <motion.i
              className="fab fa-twitter twitter"
              whileHover={{ scale: 1.2, color: "#1DA1F2" }}
            />
            <motion.i
              className="fab fa-linkedin linkedin"
              whileHover={{ scale: 1.2, color: "#0077B5" }}
            />
          </motion.div>

          <motion.button
            className="primary-btn"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
