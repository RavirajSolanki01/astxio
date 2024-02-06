"use client";
import { addPropertyRedux } from "@/redux/apiCall";
import {
  addPropertyFeatureSuccess,
  resetReduxState,
} from "@/redux/propertySlice";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddProperty = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    property_type: "",
    build: "",
    price: "",
    title: "",
    location: "",
    sofa: 0,
    bed: 0,
    bathroom: 0,
    size: 0,
    imgData: ["/land.png", "/land.png", "/land.png"],
  });
  const { error, pending, success } = useSelector(
    (state: any) => state.property
  );

  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    addPropertyRedux(form, dispatch);
  };

  useEffect(() => {
    if (success) {
      router.push("/admin");
      dispatch(resetReduxState());
    }
  }, [success]);

  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => router.push("/admin")}
          className="bg-green-500 p-2 rounded-md text-white"
        >
          Go back to Admin Panel
        </button>

        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <div className="w-full">
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({ ...pre, title: e.target.value }))
                  }
                  value={form.title}
                  className="w-full"
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                />
              </div>
              <div className="flex gap-2">
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({
                      ...pre,
                      property_type: e.target.value,
                    }))
                  }
                  value={form.property_type}
                  className="w-full"
                  id="outlined-basic"
                  label="Property type"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({ ...pre, build: e.target.value }))
                  }
                  value={form.build}
                  className="w-full"
                  id="outlined-basic"
                  label="Build"
                  variant="outlined"
                />
              </div>
              <div className="w-full flex gap-2">
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({ ...pre, price: e.target.value }))
                  }
                  value={form.price}
                  className="w-full"
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({ ...pre, location: e.target.value }))
                  }
                  value={form.location}
                  className="w-full"
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                />
              </div>
              <div className="w-full gap-2 flex">
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({
                      ...pre,
                      sofa: e.target.value as unknown as number,
                    }))
                  }
                  value={form.sofa}
                  className="w-full"
                  id="outlined-basic"
                  label="Sofa"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({
                      ...pre,
                      bed: e.target.value as unknown as number,
                    }))
                  }
                  value={form.bed}
                  className="w-full"
                  id="outlined-basic"
                  label="Bed"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({
                      ...pre,
                      bathroom: e.target.value as unknown as number,
                    }))
                  }
                  value={form.bathroom}
                  className="w-full"
                  id="outlined-basic"
                  label="Bathroom"
                  variant="outlined"
                />
                <TextField
                  onChange={(e) =>
                    setForm((pre) => ({
                      ...pre,
                      size: e.target.value as unknown as number,
                    }))
                  }
                  value={form.size}
                  className="w-full"
                  id="outlined-basic"
                  label="size"
                  variant="outlined"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-sky-800 p-2 rounded-md text-white"
                >
                  {pending ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;


/**
 * PostgreSQL:
 * Port: 5432
 * 
 */