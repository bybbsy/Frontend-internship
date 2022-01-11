import { State } from "./state";
import { ActionContext, ActionTree } from "vuex";
import { MutationTypes } from "./mutations";
import { RootState } from "@/store/index";

export enum ActionTypes {
    fetchProducts = 'fetchProducts'
}

export interface Actions {
    [ActionTypes.fetchProducts]({commit}: ActionContext<State, RootState>): void,
}

export const actions: ActionTree<State, RootState> & Actions = {
    async [ActionTypes.fetchProducts]({commit}) {
        return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
            .then(response => response.json())
            .then(data => commit(MutationTypes.setProducts, data))
            .catch(e => console.log('error: ', e))
    }
}