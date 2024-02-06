"use client";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { IData } from "../../page";
import { useDispatch, useSelector } from "react-redux";
import { updatePropertyRedux } from "@/redux/apiCall";
import { resetReduxState } from "@/redux/propertySlice";

interface IParams {
  id?: string;
}
const UpdateId = ({ params }: { params: IParams }) => {
  const router = useRouter();
  const dispatch = useDispatch();
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/posts/${params.id}`);
      const newData = await data.json();
      // console.log(newData.rows[0],"-000----------");
      
      // setForm(newData[0][0] as IData); // For MySQL
      setForm(newData.rows[0] as IData); // For PostgreSQL
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (success) {
      router.push("/admin");
      dispatch(resetReduxState()); // reset redux store
    }
  }, [success]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    updatePropertyRedux(form, params.id, dispatch);
  };

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
          <form onSubmit={handleUpdate}>
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
                  {pending ? "Loading..." : "Update"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateId;
