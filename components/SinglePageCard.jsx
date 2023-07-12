"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Client, Databases, Query } from "appwrite";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a69dbd67db0755a992");

const SinglePageCard = () => {
  const [selectExam, setSelectExam] = useState([]);
  const [slug, setSlug] = useState([]);
  const pathname = usePathname();
  const router = useRouter();

  // const slug = params;

  console.warn(slug);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "64a69f759e473328b166",
      "64a6c4c73e25d8135f8f"
    );

    promise.then(
      function (response) {
        console.log(response);
        setSelectExam(response.documents);
        setSlug(response.documents.map((data) => data.slug));
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleCardClick = (categorySlug) => {
    try {
      if (categorySlug === "quiz") {
        // Redirect to quiz page
        router.push(`/quiz/${pathname.split("/")[2]}`);
      } else if (categorySlug === "grammar") {
        // Redirect to grammar lesson page
        router.push(`/lessons/${pathname.split("/")[2]}`);
      } else if (categorySlug === "pronunciation") {
        // Redirect to pronunciation lesson page
        router.push(`/pronunciation/${pathname.split("/")[2]}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {selectExam.map((category) => (
        <Card key={category.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={category.imgurl}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              type="button"
              size="small"
              onClick={() => handleCardClick(category.slug)}
            >
              Explore
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default SinglePageCard;
