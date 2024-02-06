"use client";
import React, { useState } from "react";
import RDropDown from "../ReusableComponents/RDropDown";
import { Grid } from "@mui/material";

// interface filterData {
//   location: string;
//   propertyType: string;
//   price: string;
// }

const HeroForm = () => {
  const [{ location, price, propertyType, range }, setFormData] = useState({
    location: "",
    propertyType: "",
    price: "",
    range: "",
  });

  const locationData = [
    { dataValue: "london", title: "London" },
    { dataValue: "usa", title: "USA" },
    { dataValue: "india", title: "India" },
    { dataValue: "dubai", title: "Dubai" },
    { dataValue: "singapore", title: "Singapore" },
  ];

  const propertyTypeData = [
    { dataValue: "flat", title: "Flat" },
    { dataValue: "farm house", title: "Farm House" },
    { dataValue: "parking", title: "Parking" },
    { dataValue: "land", title: "Land" },
  ];

  const priceData = [
    { dataValue: "9L", title: "9L" },
    { dataValue: "10L", title: "10L" },
    { dataValue: "15L", title: "15L" },
    { dataValue: "20L", title: "20L" },
    { dataValue: "25L", title: "25L" },
    { dataValue: "30L", title: "30L" },
    { dataValue: "7 million", title: "7 million" },
    { dataValue: "8 million", title: "8 million" },
    { dataValue: "9 million", title: "9 million" },
    { dataValue: "10 million", title: "10 million" },
  ];

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <RDropDown
            value={location}
            handleChange={(e) => {
              setFormData((pre) => ({ ...pre, location: e.target.value }));
            }}
            label="Location"
            isDark
            data={locationData}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RDropDown
            value={propertyType}
            handleChange={(e) => {
              setFormData((pre) => ({ ...pre, propertyType: e.target.value }));
            }}
            label="Property Type"
            data={propertyTypeData}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RDropDown
            value={price}
            handleChange={(e) => {
              setFormData((pre) => ({ ...pre, price: e.target.value }));
            }}
            label="Price"
            data={priceData}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <RDropDown
            value={range}
            handleChange={(e) => {
              setFormData((pre) => ({ ...pre, range: e.target.value }));
            }}
            isLabel={false}
            data={priceData}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroForm;
