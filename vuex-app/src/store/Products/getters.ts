import { State } from '@/types/Products/state-types';
import { Getters } from '@/types/Products/getters-types';
import { GetterTree } from 'vuex';
import { RootState } from '@/store/index';

export const getters: GetterTree<State, RootState> & Getters = {
    getReceivedProducts(state) {
        return state.receivedProducts
    }
} 