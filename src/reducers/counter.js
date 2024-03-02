import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counterVal: 0,
    },
    reducers: {
        increment: (state) => {
            state.counterVal += 1
        },
        decrement: (state) => {
            state.counterVal -= 1
        },
        addition: (state, { payload }) => {
            state.counterVal += Number(payload.value)
        },
        subtraction: (state, { payload }) => {
            state.counterVal -= Number(payload.value)
        },
    },
})

export const counterActions = counterSlice.actions
export default counterSlice
