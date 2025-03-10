"use client"
import { store } from '@/configs/redux.config'
import React from 'react'
import { Provider } from "react-redux"

const ReduxStoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default ReduxStoreProvider