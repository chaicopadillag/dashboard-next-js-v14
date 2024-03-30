"use client"

import { store } from "@/store";
import { FC, ReactNode, useEffect } from 'react';
import { Provider } from "react-redux";
import { setFavoritePokemons } from "../reducers/pokemonSlice";

type Props = {
    children: ReactNode
}

export const ReduxProvider: FC<Props> = ({ children }) => {

    useEffect(() => {

        const pokemons = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}');

        store.dispatch(setFavoritePokemons(pokemons))

    }, [])


    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
