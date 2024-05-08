import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

const Filter = () => {
  return (
    <>
      <div className="text-gray-600 body-font pt-5">
        <div className="flex pt-5 md:flex-row items-center  justify-between">
          <Input
            className="dark:text-white w-96 max-[780px]:w-96 mr-5 max-[410px]:w-40"
            type="search"
            placeholder="Search..."
          />

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Africa</SelectItem>
                <SelectItem value="banana">America</SelectItem>
                <SelectItem value="blueberry">Asia</SelectItem>
                <SelectItem value="grapes">Europe</SelectItem>
                <SelectItem value="pineapple">Oceania</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Filter;
