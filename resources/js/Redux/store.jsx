import { configureStore,combineReducers } from '@reduxjs/toolkit';
import customersReducer from './slices/customerSlice'; 
import suppliersReducer from './slices/supplierSlice';
import deliveryNotesReducer from './slices/deliveryNoteSlice';
import goodsReceivedReducer from './slices/goodsRecievedSlice';
import invoicesReducer from './slices/invoiceSlice';
import quotationReducer from './slices/quotationSlice';
import fuelExpenseSlice from './slices/fuelExpenseSlice';
import transportSlice from './slices/transportSlice';
import newsletterSlice from './slices/newsletterSlice';


const rootReducer = combineReducers({
    // Here we will add reducers
    customers: customersReducer,
    suppliers: suppliersReducer,
    deliveryNotes: deliveryNotesReducer,
    goodsReceived: goodsReceivedReducer,
    invoices: invoicesReducer,
    quotations: quotationReducer,
    fuelExpenses: fuelExpenseSlice,
    transport: transportSlice,
    newsletter: newsletterSlice,


  });
const store = configureStore({
    reducer:  rootReducer
  });
export default store;