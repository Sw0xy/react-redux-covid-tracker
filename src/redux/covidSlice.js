import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchCountries = createAsyncThunk(
  "covid/fetchCountries",
  async () => {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
   
    return countries.map((country) => country.name);
  }
);

export const fetchData = createAsyncThunk(
  "covid/fetchData",
  async (country) => {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${url}/countries/${country}`);
    console.log(confirmed, recovered, deaths, lastUpdate );
    return { confirmed, recovered, deaths, lastUpdate };
  }
);

export const fetchDailyData = createAsyncThunk(
  "covid/fetchDailyData",
  async () => {
    const { data } = await axios.get(`${url}/daily`);
    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    items: [],
    dailyData: [],
    countries: [],
    status: "idle",
    error: null,
  },

  reducers: {

  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchData.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [fetchDailyData.fulfilled]: (state, action) => {
      state.dailyData = action.payload;
      state.status = "succeeded";
    },
    [fetchDailyData.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchDailyData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.status = "succeeded";
    },
    [fetchCountries.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCountries.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});


export const dataSelector = (state) => state.covid.data;

export const statusSelector = (state) => state.covid.status;

export const errorSelector = (state) => state.covid.error;

export default covidSlice.reducer;
