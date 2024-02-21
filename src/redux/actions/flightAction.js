import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from '../../constant';

export const getFlights = createAsyncThunk('flight/getFlights', async () => {
  const res = await axios.request(options);

  const refinedData = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
  }));

  return refinedData;
});
