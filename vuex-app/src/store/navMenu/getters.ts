import { GetterTree } from "vuex";
import { State } from "@/types/navMenu/state-types";
import { RootState } from "@/store/index";
import { Getters } from "@/types/navMenu/getters-types";

export const getters: GetterTree<State, RootState> & Getters = {
    getShowMenu(state) {
        return state.showMenu
    }
}