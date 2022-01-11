import { State, Albums } from "./state";
import { MutationTree } from 'vuex'

export enum MutationTypes {
    setProducts = 'SET_PRODUCTS'
}

export type Mutations = {
    [MutationTypes.setProducts](state: State, products: Albums[]): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.setProducts](state, products) {
        state.receivedProducts = products
    }
}

