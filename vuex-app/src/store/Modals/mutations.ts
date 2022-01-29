import { State } from '@/types/Modals/state-types';
import { MutationTree } from 'vuex'
import { MutationTypes, Mutations } from '@/types/Modals/mutations-types'

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.setModalData](state, payload) {
        state.modalData = payload;
    }
}