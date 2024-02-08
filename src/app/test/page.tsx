"use client";
import React, { useEffect } from "react";

const Testing = () => {
  useEffect(() => {
    async function fetchAllData() {
      const data = await fetch("../api/cars");
      console.log(await data.json(), "TEst datat");
    }
    fetchAllData()
  }, []);

  return <div>Testing</div>;
};

export default Testing;
