"use client";
import PropertyCard from "@/components/property-page/PropertyCard";
import React, { useEffect, useState } from "react";

const LiveDataPage = () => {
  const [{ title }, setLiveFormData] = useState({
    title: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/posts");

      console.log(await data.json());
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <PropertyCard
          bathroom={1}
          bed={1}
          build="new"
          imgData={["/land.png"]}
          location="SG Highway"
          price="234555"
          property_type="Great"
          size={233}
          sofa={3}
          title={title}
        />
      </div>
    </div>
  );
};

export default LiveDataPage;
