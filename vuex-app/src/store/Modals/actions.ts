import { ModalData, State } from "./state";
import { ActionContext, ActionTree } from "vuex";
import { MutationTypes } from "./mutations";
import { RootState } from "@/store/index";

export enum ActionTypes {
    toggleModal = 'toggleModal'
}

export interface Actions {
    [ActionTypes.toggleModal]({commit}: ActionContext<State, RootState>, payload: ModalData): void
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.toggleModal]({commit}, payload) {
        commit(MutationTypes.setModalData, payload)
    }
}