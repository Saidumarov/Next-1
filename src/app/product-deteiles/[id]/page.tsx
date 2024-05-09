"use client";
import LoadingProduct from "@/components/shared/loading/loading";
import { fetchData } from "@/hooks";
import { Country } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

const ProductDetailes = () => {
  const root = useRouter();
  const [data, setData] = useState<Country[] | null>(null);
  const [isloading, setisloading] = useState(false);
  const common = new URLSearchParams(window.location.search).get("common");
  const { id } = useParams();

  const fetchDataAndSetState = async () => {
    setisloading(true);
    try {
      const fetchedData = await fetchData();
      setData(fetchedData?.data);
      setisloading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setisloading(false);
    }
  };
  useEffect(() => {
    fetchDataAndSetState();
  }, [common, id]);

  const handleCounter = (id: string) => {
    try {
      data?.forEach((el) => {
        if (el?.cca3 == id) {
          fetchDataAndSetState();
          root.push(`/product-deteiles/CTI?common=${el.name?.common}`);
        }
      });
    } catch (error) {
      console.log(error);
      setisloading(false);
    }
  };

  return (
    <>
      {isloading ? <LoadingProduct /> : null}
      <section className="text-gray-600 body-font relative overflow-hidden">
        <div className="container mx-auto flex  pt-28 flex-wrap min-[800px]:flex-nowrap pb-48 justify-between">
          <div
            onClick={() => root.back()}
            className="absolute shadow-md rounded-md pr-4 pl-2 p-2  top-10 text-black text-2xl dark:text-white flex items-center gap-2 cursor-pointer"
          >
            <IoArrowBackSharp />
            Back
          </div>
          {data?.map((el) => {
            let til = el?.languages;
            let obj;
            if (til) {
              obj = Object?.values(til);
            }
            if (el?.name?.common == common) {
              console.log(el);

              return (
                <>
                  <div className="max-[800px]:w-full w-[50%] h-[500px] max-[450px]:h-[350px] rounded-lg overflow-hidden sm:mr-10 flex items-end relative">
                    <img
                      src={el?.flags?.png}
                      alt=""
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-gray-900 text-5xl mb-1 title-font pt-32 dark:text-white  max-[450px]:text-5xl ">
                      {el?.name?.common}
                    </h1>
                    <div className="flex justify-between pt-10 ">
                      <div>
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Native Name:
                          </span>{" "}
                          {el?.name?.common}
                        </p>
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Population:
                          </span>{" "}
                          {el?.population}
                        </p>
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Region:
                          </span>{" "}
                          {el?.region}
                        </p>
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Sub Region:
                          </span>{" "}
                          {el?.subregion}
                        </p>
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Capital:
                          </span>{" "}
                          {el?.capital}
                        </p>
                        <p
                          className={` ${
                            el?.borders?.length > 5
                              ? "w-[350px] overflow-scroll overflow-y-hidden"
                              : ""
                          } absolute pt-2 max-[470px]:grid grid-cols-2`}
                        >
                          <span className="text-nowrap text-black font-semibold dark:text-white">
                            Border Countries:
                          </span>
                          {el?.borders?.map((el, i) => (
                            <span
                              key={i}
                              onClick={() => handleCounter(el)}
                              className="bg-white p-2 cursor-pointer  shadow-md rounded-md ml-2 dark:bg-slate-400 dark:text-white max-[470px]:mt-5  "
                            >
                              {el}
                            </span>
                          ))}
                        </p>
                      </div>
                      <div className="pl-12">
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Top Level
                          </span>{" "}
                          {el?.ccn3}
                        </p>
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Currencies:{" "}
                          </span>
                          Euro
                        </p>
                        <p className="dark:text-slate-300">
                          <span className="text-black font-semibold dark:text-white">
                            Languages:
                          </span>{" "}
                          {obj?.map((el) => {
                            return " " + el;
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default ProductDetailes;
