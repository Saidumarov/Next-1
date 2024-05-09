"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StateData } from "@/types";

const Filter = ({ state }: StateData) => {
  const { data2, setData } = state;

  const handleSearch = (v: string) => {
    let searchData = data2?.filter((el) => {
      return (
        el?.region?.toLowerCase().includes(v) ||
        el?.name?.common?.toLowerCase().includes(v)
      );
    });
    setData(searchData);
  };

  const handleRegion = (v: string) => {
    let countryData = data2?.filter((el) => {
      return v === "all" ? el : el?.region == v;
    });
    setData(countryData);
  };
  return (
    <>
      <div className="text-gray-600 body-font pt-5">
        <div className="flex pt-5 md:flex-row items-center  justify-between">
          <Input
            className="dark:text-white w-96 max-[780px]:w-96 mr-5 max-[410px]:w-40"
            type="search"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
          />

          <Select onValueChange={(e) => handleRegion(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Africa">Africa</SelectItem>
                <SelectItem value="Americas">America</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Oceania">Oceania</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Filter;
