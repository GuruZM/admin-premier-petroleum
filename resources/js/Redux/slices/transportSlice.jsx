import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

// fetch inventory from the database 
export const fetchTransportExpense = createAsyncThunk('transportExpense/fetchAll', async () => {
    try {
      const response = await axios.get('/transport-expenses'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error; 
    }
  });

  const transportExpenseSlice = createSlice({
    name: 'transportExpense',
    initialState: {
      transportExpense: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
       
        
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchTransportExpense.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchTransportExpense.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.transportExpense = action.payload;
        })
        .addCase(fetchTransportExpense.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

//   export const { addCustomer,submitting } = transportExpenseSlice.actions;
  export default transportExpenseSlice.reducer;