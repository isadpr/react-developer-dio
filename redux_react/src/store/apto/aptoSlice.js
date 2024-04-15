import { createSlice } from '@reduxjs/toolkit';

const determinarPromocao = (apto) => {
    if(!apto.temPromocao) return 'Sem';

    if(apto.preco < 1000) return 'Normal';
    if(apto.preco < 5000) return 'Plus';
    else return 'Super';
}

const aptoSlice = createSlice({
    name: 'aptos',
    initialState: [],
    reducers: {
        salvarApto: (state, action) => {
            return [...state, {...action.payload, ... {promocao: determinarPromocao(action.payload)}}]
        },
        selecionarPromocao: (state, action) => {
            const apto = state.find(apto => apto.numero === action.payload.numero);
            apto.temPromocao = !apto.temPromocao

            apto.promocao = determinarPromocao(apto);
        }
    }
});

export const { salvarApto, selecionarPromocao } = aptoSlice.actions;
export default aptoSlice.reducer;