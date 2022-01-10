import { MutationTree } from "vuex"
import { State } from "./state"

export enum MutationTypes {
    toggleMenuState = 'TOGGLE_MENU_STATE'
}

export type Mutations = {
    [MutationTypes.toggleMenuState](state: State): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.toggleMenuState](state) {
        state.showMenu = !state.showMenu
    }
}