import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'

export const store = configureStore({
    reducer: {
        reducecounter: counterReducer,
    // add any new reducer here, call it like counter and import it from actions you created
    },
})