"use client";
import { ProductT } from "@/types";
import { useRouter } from "next/navigation";
const Card = ({ product }: { product: ProductT }) => {
  const root = useRouter();
  return (
    <>
      <div className="xl:w-1/4 max-[1270px]:w-1/3 max-[975px]:w-1/2 max-[550px]:w-full p-4">
        <div
          onClick={() => root.push(`/product-deteiles/${product.id}`)}
          className="bg-gray-100 rounded-lg dark:bg-slate-800 cursor-pointer"
        >
          <img
            className="h-50 rounded w-full object-cover object-center mb-6"
            src={product.img}
            alt="content"
          />
          <div className=" px-6 pb-6">
            <h2 className="text-lg text-gray-900 dark:text-sky-50 font-medium title-font mb-4">
              {product.title}
            </h2>
            <p className="dark:text-slate-300">
              <span className="text-black font-medium  dark:text-sky-50">
                Population:
              </span>{" "}
              {product.population}
            </p>
            <p className="dark:text-slate-300">
              <span className="text-black font-medium  dark:text-sky-100 ">
                Region:
              </span>{" "}
              {product.region}
            </p>
            <p className="dark:text-slate-300">
              <span className="text-black font-medium  dark:text-sky-100 ">
                Capital:
              </span>{" "}
              {product.capital}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
