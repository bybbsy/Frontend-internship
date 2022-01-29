import { State, ModalData } from "@/store/Modals/state";

export enum MutationTypes {
    setModalData = 'SET_MODAL_DATA'
}

export type Mutations = {
    [MutationTypes.setModalData](state: State, payload: ModalData): void
}