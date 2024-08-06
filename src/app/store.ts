import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import counterSlice from './features/counter/counterSlice'
import cartSlice from './features/cart/cartSlice'
import  productsSlice  from './features/products/createAsyncThunk.ts'
import  {productApiSlice}  from './features/products/productSlice.ts'


const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    products: productsSlice,
    [productApiSlice.reducerPath]: productApiSlice.reducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: false,
  }).concat([productApiSlice.middleware])
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

export default store