import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
    getShowMenu(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
    getShowMenu(state) {
        return state.showMenu
    }
}