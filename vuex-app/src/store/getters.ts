import {State, ModalData, Albums} from "./state";
import {GetterTree} from 'vuex'

export type Getters = {
    getModalData(state: State): ModalData
    getShowMenu(state: State): boolean
    getReceivedProducts(state: State): Albums[]  
}

export const getters: GetterTree<State, State> & Getters = {
    getModalData(state) {
        return state.modalData
    },
    getShowMenu(state) {
        return state.showMenu
    },
    getReceivedProducts(state) {
        return state.receivedProducts
    }
} 