import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoJaNosFavoritos = state.itens.find(
        (p) => p.id === action.payload.id
      )

      if (produtoJaNosFavoritos) {
        state.itens = state.itens.filter((p) => p.id !== action.payload.id)
      } else {
        state.itens.push(action.payload)
      }
    },
    limparFavoritos: (state) => {
      state.itens = []
    }
  }
})

export const { favoritar, limparFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
