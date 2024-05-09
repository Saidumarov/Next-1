"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/hooks";
import Card from "@/components/shared/card";
import Filter from "@/layout/filter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Country } from "@/types";
import { SkeletonCard } from "@/components/shared/loading/card";

const Products = () => {
  const [data, setData] = useState<Country[] | null>(null);
  const [data2, setData2] = useState<Country[] | null>(null);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 24;
  const paginationItemCount = 5;
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const fetchedData = await fetchData();
        setData2(fetchedData?.data);
        setTimeout(() => {
          setData(fetchedData?.data);
          setisloading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetState();
  }, []);

  // Pagination function
  const startOffset = itemOffset;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(startOffset, endOffset);
  const pageCount = Math.ceil((data?.length || 0) / itemsPerPage);

  const handlePageClick = (selectedPage: number) => {
    const newOffset = selectedPage * itemsPerPage;
    setItemOffset(newOffset);
  };

  let startPage = Math.max(
    0,
    itemOffset / itemsPerPage - Math.floor(paginationItemCount / 2)
  );
  let endPage = Math.min(startPage + paginationItemCount - 1, pageCount - 1);

  if (endPage - startPage < paginationItemCount - 1) {
    startPage = Math.max(0, endPage - paginationItemCount + 1);
  }

  return (
    <div className="container mx-auto">
      <Filter state={{ data2, setData }} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {isloading ? <SkeletonCard /> : null}
            {currentItems &&
              currentItems.map((el, i) => <Card key={i} product={el} />)}
          </div>

          {/* Pagination component */}
          {data && data?.length > 0 ? (
            <Pagination className="mt-24">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="next cursor-pointer"
                    onClick={() =>
                      setItemOffset((prevOffset) =>
                        Math.max(prevOffset - itemsPerPage, 0)
                      )
                    }
                  />
                </PaginationItem>
                {startPage > 0 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                {Array.from({ length: endPage - startPage + 1 }).map((_, i) => (
                  <PaginationItem key={startPage + i}>
                    <PaginationLink
                      onClick={() => handlePageClick(startPage + i)}
                      isActive={startPage + i === itemOffset / itemsPerPage}
                      className="cursor-pointer"
                    >
                      {startPage + i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {endPage < pageCount - 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationNext
                    className="next cursor-pointer"
                    onClick={() =>
                      setItemOffset((prevOffset) =>
                        Math.min(
                          prevOffset + itemsPerPage,
                          (pageCount - 1) * itemsPerPage
                        )
                      )
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
