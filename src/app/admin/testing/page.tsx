"use client";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PropertyCard from "@/components/property-page/PropertyCard";
import { useRouter } from "next/navigation";

export interface INewOnlineData {
  id: number;
  property_type: string;
  build: string;
  price: string;
  title: string;
  location: string;
  sofa: number;
  bed: number;
  bathroom: number;
  size: number;
}

const Testing = () => {
  const router = useRouter();
  const [properties, setLiveFormData] = useState<Array<INewOnlineData> | null>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/cars");
      const newData = await data.json();
      console.log(newData, "DATA----");

      setLiveFormData(newData.result.rows as INewOnlineData[]);
    };

    fetchData();
  }, []);

  return (
    <>
      <button
        onClick={() => router.push("/admin/testing/add")}
        className="bg-green-500 p-2 rounded-md text-white"
      >
        Add new Testing property
      </button>

      <div className="">
        <div className="min-w-[300px] flex flex-col gap-2">
          {
            <Grid container spacing={2}>
              {properties === null ? (
                <h3 className="p-4">Loading...</h3>
              ) : (
                properties?.map(
                  ({
                    bathroom,
                    bed,
                    build,
                    id,
                    location,
                    price,
                    property_type,
                    size,
                    sofa,
                    title,
                  }) => (
                    <Grid key={id} item xs={12} sm={12} md={4} lg={4}>
                      <div className="p-4">
                        <div className="flex gap-2">
                          <button
                            className="bg-green-500 p-1 rounded-md text-white"
                            onClick={() =>
                              router.push(`../admin/testing/update/${id}`)
                            }
                          >
                            Edit
                          </button>
                          <button
                            // onClick={() => handleDelete(id)}
                            className="bg-slate-700 text-white p-1 rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                        <PropertyCard
                          bathroom={bathroom}
                          bed={bed}
                          build={build}
                          location={location}
                          price={price}
                          property_type={property_type}
                          size={size}
                          sofa={sofa}
                          title={title}
                        />
                      </div>
                    </Grid>
                  )
                )
              )}
            </Grid>
          }
        </div>
      </div>
    </>
  );
};

export default Testing;
