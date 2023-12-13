import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/Axios/axiosConfig";
import { createSlice } from "@reduxjs/toolkit";

export const fetchGoodsReceived = createAsyncThunk('goodsReceived/fetchAll', async () => {
    try {
      const response = await axios.get('/goodsReceived'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error; 
    }
  });
  
  const goodsReceivedSlice = createSlice({
    name: 'goodsReceived',
    initialState: {
      goodsReceived: [],
      status: 'empty',
      error: null,
      isSubmitting: false,
    },
    reducers: {
      addGoodsReceived: (state, action) => {
        state.goodsReceived.push(action.payload);
      },
      submitting: (state, action) => {
        state.isSubmitting = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchGoodsReceived.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchGoodsReceived.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.goodsReceived = action.payload;
        })
        .addCase(fetchGoodsReceived.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { addGoodsReceived, submitting } = goodsReceivedSlice.actions;
  export default goodsReceivedSlice.reducer;
  