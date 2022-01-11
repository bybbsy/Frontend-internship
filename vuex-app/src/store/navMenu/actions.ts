import { ActionContext, ActionTree } from "vuex";
import { MutationTypes } from "./mutations";
import { State } from "./state";
import { RootState } from "@/store/index";

export enum ActionTypes {
    toggleMenu = "toggleMenu"
}

export interface Actions {
    [ActionTypes.toggleMenu]({commit}: ActionContext<State, RootState>): void
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.toggleMenu]({commit}) {
        commit(MutationTypes.toggleMenuState)
    }
}