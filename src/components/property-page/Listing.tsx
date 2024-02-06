"use client";
import React, { useState } from "react";
import PropertyHeading from "./PropertyHeading";
// import properties from "@/utils/data";
import PropertyCard from "./PropertyCard";
import { Grid } from "@mui/material";
import RButton from "../ReusableComponents/RButton";
import ListPropertyCard from "./ListPropertyCard";
import { properties } from "@/utils/data";

const Listing = () => {
  const [isGrid, setIsGrid] = useState({ sm: 6, lg: 4 });

  const handleGridChange = (value: string) => {
    value === "grid"
      ? setIsGrid({ sm: 6, lg: 4 })
      : setIsGrid({ lg: 12, sm: 12 });
  };

  return (
    <div>
      <div className="mb-5">
        <PropertyHeading handleGridChange={handleGridChange} />
      </div>
      <Grid container spacing={2}>
        {properties.slice(0, 9).map((data, key) => (
          <Grid key={key} item xs={12} sm={isGrid.sm} lg={isGrid.lg}>
            {isGrid.lg === 12 ? (
              <ListPropertyCard {...data} />
            ) : (
              <PropertyCard {...data} />
            )}
          </Grid>
        ))}
      </Grid>
      <div className="mt-10 w-full flex justify-center">
        <RButton
          onRButtonClick={() => {}}
          title="See More Properties"
          className=""
          outline
        />
      </div>
    </div>
  );
};

export default Listing;
