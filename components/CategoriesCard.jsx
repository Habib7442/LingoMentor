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

const CategoriesCard = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "64a69f759e473328b166",
      "64a69fb1a9b1c07e2d49"
    );

    promise.then(
      function (response) {
        console.log(response);
        setCategories(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.02, boxShadow: "0 8px 40px 0 rgba(31, 38, 135, 0.37)" },
  };

  return (
    <>
      {categories.map((category) => (
        <motion.div
          key={category.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Card
            sx={{
              maxWidth: 345,
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              margin: "10px",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={category.imgurl}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {category.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/categories/${category.slug}`}>
                <Button size="small">Explore</Button>
              </Link>
            </CardActions>
          </Card>
        </motion.div>
      ))}
    </>
  );
};

export default CategoriesCard;
