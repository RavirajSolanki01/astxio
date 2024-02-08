import {
  addPropertyFeatureError,
  addPropertyFeatureStart,
  addPropertyFeatureSuccess,
  deletePropertyFeatureError,
  deletePropertyFeatureStart,
  deletePropertyFeatureSuccess,
  updatePropertyFeatureError,
  updatePropertyFeatureStart,
  updatePropertyFeatureSuccess,
} from "./propertySlice";

export const addPropertyRedux = async (form: any, dispatch: any) => {
  dispatch(addPropertyFeatureStart());
  console.log(form, "---datat");
  
  try {
    const result = await fetch("../api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const res = await result.json();
    dispatch(addPropertyFeatureSuccess(res.data));
  } catch (error) {
    dispatch(addPropertyFeatureError());
  }
};

export const deletePropertyRedux = async (id: any, dispatch: any) => {
  dispatch(deletePropertyFeatureStart());
  try {
    const result = await fetch("api/posts", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    const res = await result.json();
    dispatch(deletePropertyFeatureSuccess(res.data));
  } catch (error) {
    dispatch(deletePropertyFeatureError());
  }
};

export const updatePropertyRedux = async (
  form: any,
  id: any,
  dispatch: any
) => {
  dispatch(updatePropertyFeatureStart());
  try {
    const result = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const res = await result.json();
    dispatch(updatePropertyFeatureSuccess(res.data));
  } catch (error) {
    dispatch(updatePropertyFeatureError());
  }
};
