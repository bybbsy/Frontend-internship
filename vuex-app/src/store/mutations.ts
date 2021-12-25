import { State, ModalData } from "./state";
import {MutationTree} from 'vuex'

export enum MutationType {
    toggleMenu = 'TOGGLE_MENU',
    toggleModal = 'TOGGLE_MODAL',
    setModalData = 'SET_MODAL_DATA',
    closeModal = 'CLOSE_MODAL',
    setProducts = 'SET_PRODUCTS'
}

export type Mutations = {
    [MutationType.toggleMenu](state: State): void,
    [MutationType.toggleModal](
        state: State,
        event: Event,
        {commit}: {commit: Function}
    ): void,
    [MutationType.setModalData](state: State, payload: ModalData): void,
    [MutationType.closeModal](
        {commit}: {commit: Function}
    ): void,
    [MutationType.setProducts](state: State, products: object[]): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.toggleMenu](state) {
        state.showMenu = !state.showMenu
    },
    [MutationType.toggleModal](state, event, {commit}) {
        // If nav menu is open calls toggleMenu and then opens a modal
        if (state.showMenu) {
            commit('toggleMenu');
        }

        state.modalData.showModal = !state.modalData.showModal;
        // Length of the class to receive the last word
        // which displays the name of link and the name of modal window to show
        const len = event.target.classList.length;
        // Puts the name of link in the name of modal to show
        state.modalData.name = event.target.classList[len - 1];
    },
    [MutationType.setModalData](state, payload) {
        state.modalData = payload;
    },
    [MutationType.closeModal]({commit}) {
        commit('setModalData', {
            name: '',
            showModal: false
        })
    },
    [MutationType.setProducts](state, products) {
        state.receivedProducts = products
    }

}