"use client";
import PropertyCard from "@/components/property-page/PropertyCard";
import { deletePropertyRedux } from "@/redux/apiCall";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IData {
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
  imgData: string[];
}

const AdminPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pending } = useSelector((state: any) => state.property);
  const [properties, setLiveFormData] = useState<Array<IData> | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/posts", { next: { revalidate: 1 } });
      const newData = await data.json();
      // console.log(newData, "DATA----");

      setLiveFormData(newData as IData[]);
    };

    fetchData();
  }, [pending]);

  const handleDelete = async (id: any) => {
    if (confirm("Do you want to delete the property?")) {
      deletePropertyRedux(id, dispatch);
    }
  };

  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => router.push("/admin/addProperty")}
          className="bg-green-500 p-2 rounded-md text-white"
        >
          Add new property
        </button>
      </div>
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
              imgData,
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
                      onClick={() => router.push(`admin/updateProperty/${id}`)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-slate-700 text-white p-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                  <PropertyCard
                    bathroom={bathroom}
                    bed={bed}
                    build={build}
                    imgData={imgData}
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
    </div>
  );
};

export default AdminPage;
