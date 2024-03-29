import { notFound } from "next/navigation";
import { Pokemon } from "./interfaces/pokemon.interface";
import { PokemonsResponse, SimplePokemon } from "./interfaces/pokemons.interface";

export const getPokemons = async (limit = 100, offset = 0): Promise<SimplePokemon[]> => {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

        if (!response.ok) {
            throw {
                status: response.status,
                message: response.statusText
            }
        }

        const data = await response.json() as PokemonsResponse;

        return data.results.map(({ name, url }) => ({
            id: url.split('/').at(-2) as any,
            name
        }))

    } catch (error) {
        console.log(error)
        throw new Error("Error pokeapi")
    }
}

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            // cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 30 * 1
            }
        });

        if (!response.ok) {
            throw {
                status: response.status,
                message: response.statusText
            }
        }

        const data = await response.json() as Pokemon;

        if (!data) {
            throw {
                status: 404,
                message: 'Not Found'
            }
        }

        return data;

    } catch (error) {
        console.log(error)

        notFound();

    }

};
