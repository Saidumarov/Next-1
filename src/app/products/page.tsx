import Filter from "@/components/layout/filter";
import Card from "@/components/shared/card";
import { data } from "@/db";
import React from "react";

const Products = () => {
  return (
    <div className="container mx-auto">
      <Filter />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((el, i) => (
              <Card key={i} product={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
