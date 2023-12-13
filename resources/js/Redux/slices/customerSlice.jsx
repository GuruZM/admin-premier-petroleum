import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

// fetch inventory from the database 
export const fetchCustomers = createAsyncThunk('customers/fetchAll', async () => {
    try {
      const response = await axios.get('/customers'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error; 
    }
  });

  const customersSlice = createSlice({
    name: 'customers',
    initialState: {
      customers: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
        addCustomer: (state, action) => {
            state.customers.push(action.payload);
        },
        submitting: (state, action) => {
            state.isSubmitting = action.payload;
        },
        
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCustomers.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchCustomers.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.customers = action.payload;
        })
        .addCase(fetchCustomers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export const { addCustomer,submitting } = customersSlice.actions;
  export default customersSlice.reducer;