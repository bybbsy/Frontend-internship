import { State } from "@/types/Modals/state-types";
import { GetterTree } from 'vuex'
import { RootState } from '@/store/index'
import { Getters } from '@/types/Modals/getters-types'

export const getters: GetterTree<State, RootState> & Getters = {
    getModalData(state) {
        return state.modalData
    }
} 