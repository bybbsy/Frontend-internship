import { ModalData, State } from "./state";
import { ActionContext, ActionTree } from "vuex";
import { MutationTypes } from "./mutations";

export enum ActionTypes {
    fetchProducts = 'fetchProducts',
    toggleModal = 'toggleModal'
}

export interface Actions {
    [ActionTypes.fetchProducts]({commit}: ActionContext<State, State>): void,
    [ActionTypes.toggleModal]({commit}: ActionContext<State, State>, payload: ModalData): void
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.fetchProducts]({commit}) {
        return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
            .then(response => response.json())
            .then(data => commit(MutationTypes.setProducts, data))
            .catch(e => console.log('error: ', e))
    },
    [ActionTypes.toggleModal]({commit}, payload) {
        commit(MutationTypes.setModalData, payload)
    }
}