"use client";
import { ProductT } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Card = ({ product }: { product: ProductT }) => {
  return (
    <div className="xl:w-1/4 max-[1270px]:w-1/3 max-[975px]:w-1/2 max-[550px]:w-full p-4">
      <Link href={`/product-deteiles/CTI?common=${product.name?.common}`}>
        <div className="bg-gray-100 rounded-lg dark:bg-slate-800 cursor-pointer">
          <Image
            className="h-50 rounded w-full object-cover object-center mb-6 h-[200px]"
            src={product?.flags?.png}
            alt="content"
            width={1000}
            height={1000}
          />
          <div className=" px-6 pb-6">
            <h2 className="text-lg text-gray-900 dark:text-sky-50 font-medium title-font mb-4">
              {product.name?.common}
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
      </Link>
    </div>
  );
};

export default Card;
