import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";


export const fetchDeliveryNotes = createAsyncThunk('deliveryNotes/fetchAll', async () => {
    try {
      const response = await axios.get('/deliveryNotes'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error; 
    }
  });
  
  const deliveryNotesSlice = createSlice({
    name: 'deliveryNotes',
    initialState: {
      deliveryNotes: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
      addDeliveryNote: (state, action) => {
        state.deliveryNotes.push(action.payload);
      },
      submitting: (state, action) => {
        state.isSubmitting = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchDeliveryNotes.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchDeliveryNotes.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.deliveryNotes = action.payload;
        })
        .addCase(fetchDeliveryNotes.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { addDeliveryNote, submitting } = deliveryNotesSlice.actions;
  export default deliveryNotesSlice.reducer;
  