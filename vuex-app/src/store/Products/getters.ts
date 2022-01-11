import {State, Albums} from "./state";
import {GetterTree} from 'vuex'
import {RootState} from '@/store/index'

export type Getters = {
    getReceivedProducts(state: State): Albums[]  
}

export const getters: GetterTree<State, RootState> & Getters = {
    getReceivedProducts(state) {
        return state.receivedProducts
    }
} 