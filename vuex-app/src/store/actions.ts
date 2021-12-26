import { State } from "./state";
import { MutationType } from './mutations'
import { ActionTree } from "vuex";

export const actions: ActionTree<State, State> = {
    async fetchProducts({commit}) {
        return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
            .then(response => response.json())
            .then(data => commit(MutationType.setProducts, data))
            .catch(e => console.log('error: ', e))
    }
    // async fetchProducts({commit}) {
    //     return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
    //         .then(response => response.json())
    //         .then(data => commit(MutationType.setProducts, data))
    //         .catch(e => console.log('error: ', e))
    // }
}