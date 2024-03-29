"use client"

import { store } from "@/store"
import { FC, ReactNode } from "react"
import { Provider } from "react-redux"

type Props = {
    children: ReactNode
}

export const ReduxProvider: FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
