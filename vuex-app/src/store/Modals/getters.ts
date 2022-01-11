import {State, ModalData} from "./state";
import {GetterTree} from 'vuex'
import {RootState} from '@/store/index'
export type Getters = {
    getModalData(state: State): ModalData
}

export const getters: GetterTree<State, RootState> & Getters = {
    getModalData(state) {
        return state.modalData
    }
} 