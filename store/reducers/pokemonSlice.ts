import { SimplePokemon } from '@/services/pokeapi/interfaces/pokemons.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FavoritePokemonState = {
    [id: string]: SimplePokemon
}

const initialState: FavoritePokemonState = {}

const pokemonSlice = createSlice({
    name: "favoritePokemons",
    initialState,
    reducers: {
        setFavoritePokemons: (_, action: PayloadAction<FavoritePokemonState>) => {
            return action.payload
        },
        toggleFavoritePokemon: (state, action: PayloadAction<SimplePokemon>) => {
            const { id } = action.payload
            if (!!state[id]) {
                delete state[id]
                return;
            }

            return {
                ...state,
                [id]: action.payload
            }
        }
    }
});

export const { toggleFavoritePokemon, setFavoritePokemons } = pokemonSlice.actions

export default pokemonSlice.reducer