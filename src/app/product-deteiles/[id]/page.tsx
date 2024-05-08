"use client";
import { useRouter } from "next/navigation";
import { IoArrowBackSharp } from "react-icons/io5";

const ProductDetailes = () => {
  const root = useRouter();
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container mx-auto flex sm:flex-nowrap  pt-28 flex-wrap">
          <div
            onClick={() => root.back()}
            className="absolute z-10 top-10 text-black text-2xl dark:text-white flex items-center gap-2 cursor-pointer"
          >
            <IoArrowBackSharp />
            Back
          </div>
          <div className=" md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-end relative">
            <img
              src="/images/det.png"
              alt=""
              className="w-1px h-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-gray-900 text-7xl mb-1 title-font pt-32 dark:text-white ">
              Belgium
            </h1>
            <div className="flex justify-between pt-10 ">
              <div>
                <p className="dark:text-slate-300">
                  <span className="text-black font-semibold dark:text-white">
                    Native Name:
                  </span>{" "}
                  België
                </p>
                <p className="dark:text-slate-300">
                  <span className="text-black font-semibold dark:text-white">
                    Population:
                  </span>{" "}
                  11,319,511
                </p>
                <p className="dark:text-slate-300">
                  <span className="text-black font-semibold dark:text-white">
                    Region:
                  </span>{" "}
                  Europe
                </p>
                <p className="dark:text-slate-300">
                  <span className="text-black font-semibold dark:text-white">
                    Sub Region:
                  </span>{" "}
                  Western Europe
                </p>
                <p className="dark:text-slate-300">
                  <span className="text-black font-semibold dark:text-white">
                    Capital:
                  </span>{" "}
                  Brussels
                </p>
                <p className="absolute pt-2">
                  <span className="text-nowrap text-black font-semibold dark:text-white">
                    Border Countries:
                  </span>
                  <span className="bg-white p-2 shadow-md rounded-md ml-2 dark:bg-slate-400 dark:text-white">
                    France
                  </span>
                  <span className="bg-white p-2 shadow-md rounded-md ml-2  dark:bg-slate-400 dark:text-white">
                    Germany
                  </span>
                  <span className="bg-white p-2 shadow-md rounded-md ml-2  dark:bg-slate-400 dark:text-white">
                    Netherlands
                  </span>
                </p>
              </div>
              <div className="pl-12">
                <p className="dark:text-slate-300">
                  <span className="text-black font-semibold dark:text-white">
                    Top Level
                  </span>{" "}
                  Domain: .be
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
                  Dutch, French, German
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailes;
