"use client";
import { useState, useEffect } from "react";
import { Button, Modal } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { account } from "@appwrite/appwrite";
import Link from "next/link";

const Home = () => {
  const [showRiddle, setShowRiddle] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [answer, setAnswer] = useState("");
  const [clue1] = useState("It is used for typing");
  const [clue2] = useState("It has letters and numbers");
  const correctAnswer = "keyboard";
  const [userDetails, setUserDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkAuthenticated = async () => {
      try {
        const response = await account.get();
        setUserDetails(response);
      } catch (error) {
        console.log(error);
      }
    };

    checkAuthenticated();
  }, []);

  const router = useRouter();

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleGetStarted = () => {
    setShowRiddle(true);
  };

  const handleCheckAnswer = () => {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      // Correct answer
      setIsModalOpen(true);
      setFeedback("Correct answer! Redirecting...");
      // Redirect to the /categories page
      setTimeout(() => {
        router.push("/categories");
      }, 2000); // Redirect after 2 seconds
    } else {
      // Incorrect answer
      setFeedback("Incorrect answer. Try again!");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.section
        className="w-full flex-center flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h1
          className="head_text text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Inspire, Create & Connect <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            &quot;Language Empowerment Hub&quot;
          </span>
        </motion.h1>
        <motion.p
          className="desc text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Unlock the power of communication with our versatile language
          platform.
        </motion.p>
        <motion.div
          className="max-w-md mx-auto bg-white shadow-md rounded-md mt-3 mb-5 overflow-hidden"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <Image
            className="w-full h-auto object-cover object-center"
            src="/assets/images/learning.jpg"
            alt="Card Image"
            width={300}
            height={300}
          />
        </motion.div>
        {showRiddle ? (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <p className="text-gray-800 text-lg">
              What has keys but cannot open locks?
            </p>
            <div className="my-4">
              <motion.p
                className="text-gray-600"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {clue1}
              </motion.p>
              <motion.p
                className="text-gray-600"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {clue2}
              </motion.p>
            </div>
            <motion.input
              type="text"
              value={answer}
              onChange={handleInputChange}
              placeholder="Enter your answer"
              className="px-4 py-2 mb-4 bg-gray-100 rounded-md focus:outline-none"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            />
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {userDetails && (
                <Button color="secondary" onClick={handleCheckAnswer}>
                  Check Answer
                </Button>
              )}
              {!userDetails && (
                <Link href="/signup">
                  <Button color="secondary">Check Answer</Button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="mb-5"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Button color="secondary" onClick={handleGetStarted}>
              Get Started
            </Button>
          </motion.div>
        )}

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Feedback</h2>
            <p>{feedback}</p>
          </div>
        </Modal>
      </motion.section>
    </>
  );
};

export default Home;
