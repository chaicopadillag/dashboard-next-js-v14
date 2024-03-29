import { FavoritePokemonsGrid } from "@/components";


export const metadata = {
    title: 'Favoritos',
    description: 'Mis Pokemones favoritos',
};


export default async function FavoritesPage() {

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl mt-4 mb-6 w-full text-center font-bold" >Mis Pokemons favoritos</h2>
            <FavoritePokemonsGrid />

        </div>
    );
}