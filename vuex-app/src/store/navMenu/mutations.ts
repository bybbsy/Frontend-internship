import { MutationTree } from "vuex";
import { State } from "@/types/navMenu/state-types";
import { MutationTypes, Mutations } from "@/types/navMenu/mutations-types";

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.toggleMenuState](state) {
        state.showMenu = !state.showMenu
    }
}