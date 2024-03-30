"use client"

import { useAppSelector } from '@/store';
import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { PokemonGrid } from './PokemonGrid';

export const FavoritePokemonsGrid = () => {
    const favoriteState = useAppSelector(state => state.favoritePokemonState)
    const [pokemons, setPokemons] = useState(Object.values(favoriteState))

    useEffect(() => {
        setPokemons(Object.values(favoriteState))
    }, [favoriteState])



    if (pokemons.length == 0) {
        return <div className='flex flex-col h-[50vh] items-center justify-center'>
            <FaRegHeart className='text-red-500' size={100} />
            <span className='mt-4'>No hay pokemones favoritos</span>
        </div>
    }

    return (
        <PokemonGrid pokemons={pokemons} />
    )
}
