"use client"

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'

export const FavoritePokemonsGrid = () => {
    const favoriteState = useAppSelector(state => state.favoritePokemonState)
    const pokemons = Object.values(favoriteState)

    console.log({ pokemons })

    if (pokemons.length == 0) {
        return <div>No hay pokemones</div>
    }

    return (
        <PokemonGrid pokemons={pokemons} />
    )
}
