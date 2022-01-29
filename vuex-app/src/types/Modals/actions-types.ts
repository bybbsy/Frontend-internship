import { ModalData, State } from "@/types/Modals/state-types";
import { ActionContext } from "vuex";
import { RootState } from "@/store/index";

export enum ActionTypes {
    toggleModal = 'toggleModal'
}

export interface Actions {
    [ActionTypes.toggleModal]({commit}: ActionContext<State, RootState>, payload: ModalData): void
}