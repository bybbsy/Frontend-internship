import { State, ModalData } from "@/types/Modals/state-types";

export enum MutationTypes {
    setModalData = 'SET_MODAL_DATA'
}

export type Mutations = {
    [MutationTypes.setModalData](state: State, payload: ModalData): void
}