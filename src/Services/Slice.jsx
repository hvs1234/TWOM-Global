import { createSlice } from "@reduxjs/toolkit";
import NavLink from "../APIs/NavAPI";
import HomeServiceData from "../APIs/HomeServiceAPI";
import HomeChooseData from "../APIs/HomeChooseAPI";
import HomeStudioImg from "../APIs/HomeStudioAPI";
import ServiceClientData from "../APIs/ServiceClientAPI";
import ServiceCardData from "../APIs/ServiceCardAPI";

const initialState = {
  path: "/",
  isActive: false,
  navlinkdata: NavLink,
  homeservicedata: HomeServiceData,
  homechoosedata: HomeChooseData,
  homestudioimg: HomeStudioImg,
  serviceclientdata: ServiceClientData,
  servicecarddata: ServiceCardData,
  counters: {
    team: 12,
    customer: 126,
    projects: 102,
    completed: 86,
  },
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
    toggleNav(state) {
      state.isActive = !state.isActive;
    },
    setAPIData(state, action) {
      state.navlinkdata = action.payload;
      state.homeservicedata = action.payload;
      state.homechoosedata = action.payload;
      state.homestudioimg = action.payload;
      state.serviceclientdata = action.payload;
      state.servicecarddata = action.payload;
    },
    setCounter(state, action) {
      const { id, value } = action.payload;
      state.counters[id] = value;
    },
  },
});

export const { setPath, setAPIData, toggleNav, setCounter } = Slice.actions;
export default Slice.reducer;
