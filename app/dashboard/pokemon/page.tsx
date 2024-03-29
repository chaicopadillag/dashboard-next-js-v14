import { PokemonGrid } from "@/components/pokemon/PokemonGrid";
import { getPokemons } from "@/services";


export const metadata = {
    title: 'Pokemones',
    description: 'Lista de Pokemones',
};


export default async function PokemonsPage() {

    const pokemons = await getPokemons()

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl mt-4 mb-6 w-full text-center font-bold" >Lista de Pokemons</h2>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}