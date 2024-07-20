import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 10,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment :(state, action: PayloadAction<number> )=>{
            state.value += action.payload
        }
    }

})

export const { increment } = counterSlice.actions

export default counterSlice.reducer