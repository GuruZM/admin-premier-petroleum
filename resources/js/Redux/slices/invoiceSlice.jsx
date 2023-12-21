import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

export const fetchInvoices = createAsyncThunk('invoices/fetchAll', async () => {
    try {
      const response = await axios.get('/invoices'); // Replace with your API endpoint
      
      return response.data;
    } catch (error) {
      throw error; 
    }
  });
  
  const invoicesSlice = createSlice({
    name: 'invoices',
    initialState: {
      invoices: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
      addInvoice: (state, action) => {
        state.invoices.push(action.payload);
      },
      submitting: (state, action) => {
        state.isSubmitting = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchInvoices.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchInvoices.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.invoices = action.payload;
        })
        .addCase(fetchInvoices.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { addInvoice, submitting } = invoicesSlice.actions;
  export default invoicesSlice.reducer;