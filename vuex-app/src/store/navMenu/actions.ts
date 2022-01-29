import { ActionTree } from "vuex";
import { MutationTypes } from "@/types/navMenu/mutations-types";
import { State } from "@/types/navMenu/state-types";
import { RootState } from "@/store/index";
import { Actions, ActionTypes } from "@/types/navMenu/actions-types";

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.toggleMenu]({commit}) {
        commit(MutationTypes.toggleMenuState)
    }
}