"use client"
import { SimplePokemon } from "@/services/pokeapi/interfaces/pokemons.interface"
import { useAppSelector } from "@/store"
import { toggleFavoritePokemon } from "@/store/reducers/pokemonSlice"
import Image from "next/image"
import Link from "next/link"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { useAppDispatch } from '../../store/index'


export const PokemonCard = ({ id, name }: SimplePokemon) => {

    const isFavorite = useAppSelector(({ favoritePokemonState }) => !!favoritePokemonState[id]);
    const dispatch = useAppDispatch();

    return (

        <div className="bg-white rounded overflow-hidden shadow-lg">
            <div className="text-center p-6 bg-gray-800 border-b">
                <Link className="mt-4" href={`/dashboard/pokemon/${name}`}>
                    <Image className="w-40 h-40" key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={160}
                        height={160}
                        alt={name}
                    />
                </Link>
                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                <div className="mt-5">
                    <Link href={`/dashboard/pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                        Ver información
                    </Link>
                </div>
            </div>
            <div className="border-b">
                <a className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <div className="text-red-600 cursor-pointer" onClick={() => dispatch(toggleFavoritePokemon({ id, name }))} >
                        {
                            isFavorite ? <FaHeart stroke="currentColor" className="w-6 h-6 mr-4" />
                                : <FaRegHeart stroke="currentColor" className="w-6 h-6 mr-4" />
                        }
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">
                            No es tu favorito
                        </p>
                    </div>
                </a>

            </div>
        </div>

    )
}
