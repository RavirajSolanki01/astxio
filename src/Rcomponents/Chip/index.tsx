import React from "react";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import { Divider } from "@mui/material";

interface SpecificationProps {
  sofa?: number;
  bed?: number;
  bathroom?: number;
  size?: number;
}

const Specification: React.FC<SpecificationProps> = ({
  bathroom,
  bed,
  size,
  sofa,
}) => {
  return (
    <div className="flex mt-[15px] mb-[25px] overflow-hidden">
      <div className="flex items-center gap-2">
        <ChairOutlinedIcon style={{ color: "#4B5780" }} /> {sofa}
      </div>
      <Divider orientation="vertical" flexItem className="mx-3" />
      <div className="flex items-center gap-2">
        <LocalHotelOutlinedIcon style={{ color: "#4B5780" }} /> {bed}
      </div>
      <Divider orientation="vertical" flexItem className="mx-3" />

      <div className="flex items-center gap-2">
        <BathtubOutlinedIcon style={{ color: "#4B5780" }} /> {bathroom}
      </div>
      <Divider orientation="vertical" flexItem className="mx-3" />

      <div className="flex items-center gap-2">
        <SelectAllOutlinedIcon style={{ color: "#4B5780" }} /> {size}sq.ft.
      </div>
    </div>
  );
};

export default Specification;
