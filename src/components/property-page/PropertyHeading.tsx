"use client";
import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { MenuItem, Select } from "@mui/material";

interface PropertyHeadingProps {
  handleGridChange: (value: string) => void;
}

const PropertyHeading: React.FC<PropertyHeadingProps> = ({
  handleGridChange,
}) => {
  const [isGrid, setIsGrid] = useState(true);
  const [sortType, setSortType] = useState("Sort by");

  const handleChange = (value: "grid" | "list") => {
    handleGridChange(value);
    value === "grid" ? setIsGrid(true) : setIsGrid(false);
  };

  return (
    <div className="flex w-full justify-between items-center">
      <span className="text-4xl font-bold text-[#273567]">
        Properties for sale
      </span>
      <div className="flex gap-6 items-center">
        <div className=" ">
          <button
            className={`border  border-[#0000003b] rounded-l-[8px] py-[6px] px-[15px]  ${
              isGrid ? "bg-[#273567]" : "bg-white"
            } `}
            onClick={() => handleChange("grid")}
          >
            <GridViewIcon
              style={{ color: isGrid ? "#fff" : "#273567" }}
              fontSize="small"
            />
          </button>
          <button
            className={`border border-[#0000003b] rounded-r-[8px] py-[6px] px-[15px]  ${
                !isGrid ? "bg-[#273567]" : "bg-white"
            } `}
            onClick={() => handleChange("list")}
          >
            <FormatListBulletedIcon
              fontSize="small"
              style={{ color: !isGrid ? "#fff" : "#273567" }}
            />
          </button>
        </div>
        <div>
          <Select
            className="rounded-[10px] bg-white"
            placeholder="Sort by"
            value={sortType}
            onChange={(e) => {
              setSortType(e.target.value);
            }}
            inputProps={{ "aria-label": "Without label" }}
            IconComponent={() => <ArrowDropDownIcon />}
          >
            <MenuItem value={"Sort by"} className="hidden">
              Sort by
            </MenuItem>
            <MenuItem value={"price low to high"}>Price Low to High</MenuItem>
            <MenuItem value={"price high to low"}>Price High to Low</MenuItem>
            <MenuItem value={"date new to old"}>Date New to Old</MenuItem>
            <MenuItem value={"date old to new"}>Date Old to New</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeading;
