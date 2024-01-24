import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

// fetch inventory from the database 
export const fetchSubscribers = createAsyncThunk('subscribers/fetchAll', async () => {
    try {
      const response = await axios.get('/subscribers'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error; 
    }
  });
  
  const newsletterSlice = createSlice({
    name: 'suppliers',
    initialState: {
      subscribers: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
      addSubscriber: (state, action) => {
        state.subscribers.push(action.payload);
      },
      submitting: (state, action) => {
        state.isSubmitting = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSubscribers.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchSubscribers.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.subscribers = action.payload;
        })
        .addCase(fetchSubscribers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  

  export default newsletterSlice.reducer;
  