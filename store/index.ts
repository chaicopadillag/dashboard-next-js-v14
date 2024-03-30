import { Middleware, configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { localStorageMiddleware } from './middlewares'
import counterReducer from './reducers/counterSlice'
import favoritePokemonsReducer from './reducers/pokemonSlice'

export const store = configureStore({
    reducer: {
        counterState: counterReducer,
        favoritePokemonState: favoritePokemonsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector