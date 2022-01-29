import { State } from "@/types/Products/state-types";
import { ActionTypes, Actions } from "@/types/Products/actions-types";
import { ActionTree } from "vuex";
import { MutationTypes } from "@/types/Products/mutations-types";
import { RootState } from "@/store/index";


export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.fetchProducts]({commit}) {
        return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
            .then(response => response.json())
            .then(data => commit(MutationTypes.setProducts, data))
            .catch(e => console.log('error: ', e))
    }
}