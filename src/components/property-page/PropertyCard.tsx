import React from "react";
import RCarousel from "../ReusableComponents/RCarousel";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import { Divider } from "@mui/material";
import RButton from "../ReusableComponents/RButton";
import { PropertyCardProps } from "@/utils/types";


const PropertyCard: React.FC<PropertyCardProps> = ({
  bathroom,
  bed,
  build,
  location,
  price,
  property_type,
  size,
  sofa,
  title,
  imgData,
}) => {
  return (
    <div className="shadow-md p-4 bg-[#fff] rounded-md">
      <div>
        <RCarousel imgData={imgData} />
      </div>
      <div className="p-[12px]">
        <div className="flex w-full justify-between items-center mb-[10px]">
          <span className="text-[12px]">{property_type}</span>
          <div className="border px-[7px] py-[2px] border-[#141d40] flex justify-center items-center rounded-md text-[14px]">
            {build}
          </div>
        </div>

        <p className="text-[#0097cb] text-[20px]">
          <b>${price}</b>
        </p>

        <p className="text-[#273567] mt-[10px]">
          <b>{title}</b>
        </p>

        <div className="w-full flex items-center gap-1 mt-[10px]">
          <LocationOnOutlinedIcon
            style={{ color: "#5c5c5c", marginLeft: "-4px" }}
          />
          <span className="text-[#848fac] text-[14px]">{location}</span>
        </div>

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
        <RButton
          onRButtonClick={() => {}}
          title="Arrange a viewing"
          className="w-full mb-3"
          outline
        />
        <RButton
          onRButtonClick={() => {}}
          title="View full details"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PropertyCard;
