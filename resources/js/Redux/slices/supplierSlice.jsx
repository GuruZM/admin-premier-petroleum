import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

// fetch inventory from the database 
export const fetchSuppliers = createAsyncThunk('suppliers/fetchAll', async () => {
    try {
      const response = await axios.get('/suppliers'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error; 
    }
  });
  
  const suppliersSlice = createSlice({
    name: 'suppliers',
    initialState: {
      suppliers: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
      addSupplier: (state, action) => {
        state.suppliers.push(action.payload);
      },
      submitting: (state, action) => {
        state.isSubmitting = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSuppliers.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchSuppliers.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.suppliers = action.payload;
        })
        .addCase(fetchSuppliers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { addSupplier, submitting } = suppliersSlice.actions;
  export default suppliersSlice.reducer;
  