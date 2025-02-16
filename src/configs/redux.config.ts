import { configureStore } from "@reduxjs/toolkit"
import { useDispatch as useAppDispatch } from 'react-redux'


export const store = configureStore({
    reducer: {
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const useDispatch = () => useAppDispatch<AppDispatch>()
export { useDispatch }