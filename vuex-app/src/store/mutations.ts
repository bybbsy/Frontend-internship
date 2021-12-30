import { State, ModalData, Albums } from "./state";
import { MutationTree } from 'vuex'

export enum MutationTypes {
    toggleMenu = 'TOGGLE_MENU',
    setModalData = 'SET_MODAL_DATA',
    setProducts = 'SET_PRODUCTS'
}

export type Mutations = {
    [MutationTypes.toggleMenu](state: State): void,
    [MutationTypes.setModalData](state: State, payload: ModalData): void,
    [MutationTypes.setProducts](state: State, products: Albums[]): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.toggleMenu](state) {
        state.showMenu = !state.showMenu
    },
    [MutationTypes.setModalData](state, payload) {
        state.modalData = payload;
    },
    [MutationTypes.setProducts](state, products) {
        state.receivedProducts = products
    }
}

