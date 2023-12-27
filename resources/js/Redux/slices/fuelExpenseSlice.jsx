import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

// fetch inventory from the database 
export const fetchFuelExpense = createAsyncThunk('fuelExpenses/fetchAll', async () => {
    try {
      const response = await axios.get('/fuel-expenses'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error; 
    }
  });

  const fuelExpenseSlice = createSlice({
    name: 'fuelExpense',
    initialState: {
      fuelExpenses: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
        
        
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchFuelExpense.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchFuelExpense.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.fuelExpenses = action.payload;
        })
        .addCase(fetchFuelExpense.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

//   export const { addCustomer,submitting } = fuelExpenseSlice.actions;
  export default fuelExpenseSlice.reducer;