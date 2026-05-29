import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './slices/carrinhoSlice'
import favoritosReducer from './slices/favoritosSlice'
import { produtosApi } from './api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
