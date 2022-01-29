import { State } from '@/types/Products/state-types'
import { MutationTypes, Mutations } from '@/types/Products/mutations-types'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.setProducts](state, products) {
        state.receivedProducts = products
    }
}

