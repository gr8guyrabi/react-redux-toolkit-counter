import { configureStore } from '@reduxjs/toolkit'
import { counter, privacy } from '../reducers'

const Store = configureStore({
    reducer: {
        counter: counter.reducer,
        privacy: privacy.reducer,
    },
})

export default Store
