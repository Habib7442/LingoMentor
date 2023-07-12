"use client";
import { motion } from "framer-motion";
import EnglishGrammarCard from "@components/EnglishGrammarCard";

const EnglishGrammar = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <h1 className="head_text_categories text-center mb-5">
        Lessons
      </h1>
      <motion.div
        className="flex gap-3 flex-wrap justify-center mb-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <EnglishGrammarCard />
      </motion.div>
    </>
  );
};

export default EnglishGrammar;
