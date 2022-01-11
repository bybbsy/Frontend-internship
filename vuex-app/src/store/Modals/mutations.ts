import { State, ModalData } from "./state";
import { MutationTree } from 'vuex'

export enum MutationTypes {
    setModalData = 'SET_MODAL_DATA',
    setProducts = 'SET_PRODUCTS'
}

export type Mutations = {
    [MutationTypes.setModalData](state: State, payload: ModalData): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.setModalData](state, payload) {
        state.modalData = payload;
    }
}

