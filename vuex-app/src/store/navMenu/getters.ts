import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/index";

export type Getters = {
    getShowMenu(state: State): boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
    getShowMenu(state) {
        return state.showMenu
    }
}