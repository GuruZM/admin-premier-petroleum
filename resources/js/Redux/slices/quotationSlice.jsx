import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

export const fetchQuotations = createAsyncThunk('quotations/fetchAll', async () => {
    try {
      const response = await axios.get('/quotations'); // Replace with your API endpoint
     console.log('response :',response);
      return response.data;
    } catch (error) {
      throw error; 
    }
  });
  
  const quotationSlice = createSlice({
    name: 'quotations',
    initialState: {
      quotations: [],
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
        .addCase(fetchQuotations.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchQuotations.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.quotations = action.payload;
        })
        .addCase(fetchQuotations.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
//   export const { addInvoice, submitting } = invoicesSlice.actions;
  export default quotationSlice.reducer;