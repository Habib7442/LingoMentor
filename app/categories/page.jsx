"use client";

import CategoriesCard from "@components/CategoriesCard";

const Categories = () => {
  return (
    <>
      <h1 className="head_text_categories text-center mb-5">
        I want to learn...
      </h1>
      <div className="flex gap-3 flex-wrap justify-center">
      <CategoriesCard />

      </div>
    </>
  );
};

export default Categories;
