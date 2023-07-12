"use client";

import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Client, Databases, ID } from "appwrite";

import { useState, useEffect } from "react";
import Link from "next/link";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a69dbd67db0755a992");

const EnglishGrammarCard = () => {
  const [englishGrammar, setEnglishGrammar] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "64a69f759e473328b166",
      "64a9044243e771607d29"
    );

    promise.then(
      function (response) {
        console.log(response);
        setEnglishGrammar(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {englishGrammar.map((category) => (
        <motion.div
          key={category.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={category.imgUrl}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {category.lessonName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.shortDesc}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/lessons/english/${category.slug}`}>
                <Button size="small">Read More</Button>
              </Link>
            </CardActions>
          </Card>
        </motion.div>
      ))}
    </>
  );
};

export default EnglishGrammarCard;
