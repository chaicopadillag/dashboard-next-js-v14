
"use client"
import { SimplePokemon } from "@/services/pokeapi/interfaces/pokemons.interface"
import { PokemonCard } from "./PokemonCard"

type Props = {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {

    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map(poke => <PokemonCard key={poke.id} {...poke} />
                )
            }
        </div>
    )

}
