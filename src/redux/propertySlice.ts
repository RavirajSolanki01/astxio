import { IData } from "@/app/admin/page";
import { createSlice } from "@reduxjs/toolkit";

// Define an interface for the state

interface PropertyState {
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
interface PropertyInfoState {
  propertyInfo: PropertyState;
  pending: boolean;
  error: boolean;
  success: boolean;
}

// Define initial state
const initialState: PropertyInfoState = {
  propertyInfo: {
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
  },
  error: false,
  pending: false,
  success: false,
};
// create a slice function
export const propertySlice = createSlice({
  name: "property",
  initialState,
  //  create reducers {functions}
  reducers: {
    resetReduxState: (state) => {
      state.pending = false;
      state.error = false;
      state.success = false;
    },
    addPropertyFeatureStart: (state) => {
      state.pending = true;
    },
    addPropertyFeatureSuccess: (state, action) => {
      state.pending = false;
      state.success = true;
      state.propertyInfo = action.payload;
    },
    addPropertyFeatureError: (state) => {
      state.error = true;
      state.pending = false;
    },
    deletePropertyFeatureStart: (state) => {
      state.pending = true;
    },
    deletePropertyFeatureSuccess: (state) => {
      state.pending = false;
      state.success = false;
      state.propertyInfo = initialState.propertyInfo; // Reset to initial state after delete
    },
    deletePropertyFeatureError: (state) => {
      state.error = true;
      state.pending = false;
    },
    updatePropertyFeatureStart: (state) => {
      state.pending = true;
    },
    updatePropertyFeatureSuccess: (state, action) => {
      state.pending = false;
      state.success = true;
      state.propertyInfo = action.payload;
    },
    updatePropertyFeatureError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

//Export all the features you make
export const {
  resetReduxState,
  addPropertyFeatureStart,
  addPropertyFeatureError,
  addPropertyFeatureSuccess,
  deletePropertyFeatureError,
  deletePropertyFeatureStart,
  deletePropertyFeatureSuccess,
  updatePropertyFeatureStart,
  updatePropertyFeatureSuccess,
  updatePropertyFeatureError,
} = propertySlice.actions;
export default propertySlice.reducer;

// Now goto store
