import { State, ModalData } from "./state";
import {GetterTree} from 'vuex'

export const getters: GetterTree<State, State> = {
    getModalData(state: State) {
        return state.modalData
    },
    getShowMenu(state: State) {
        return state.showMenu
    },
    getReceivedProducts(state: State) {
        return state.receivedProducts
    }
} 