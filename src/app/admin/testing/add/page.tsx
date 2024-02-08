"use client";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AddTesting = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    property_type: "",
    build: "",
    price: "",
    title: "",
    location: "",
    sofa: "",
    bed: "",
    bathroom: "",
    size: "",
  });

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await fetch("/api/cars", { next: { revalidate: 1 } });
  //       const newData = await data.json();
  //       console.log(newData, "DATA-0000---");

  //       //   setLiveFormData(newData.result.rows as INewOnlineData[]);
  //     };

  //     fetchData();
  //   }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = await fetch("/api/cars", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const res = await result.json();
      if (result.ok) {
        router.push("/admin/testing");
      }
      console.log(res, "res-----", result);
    } catch (error) {
      console.log("Something went really wrong!", error);
    }
  };

  return (
    <div>
      <div className="p-4">
        <button
          onClick={() => router.push("/admin/testing")}
          className="bg-green-500 p-2 rounded-md text-white"
        >
          Go back to Admin Testing Panel
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
                    setForm((pre) => ({
                      ...pre,
                      price: e.target.value as string,
                    }))
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
                      sofa: e.target.value,
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
                      bed: e.target.value,
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
                      bathroom: e.target.value,
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
                      size: e.target.value,
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
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTesting;

/**
 * PostgreSQL:
 * Port: 5432
 *
 */
