import { State } from "@/types/navMenu/state-types";

export enum MutationTypes {
    toggleMenuState = 'TOGGLE_MENU_STATE'
}

export type Mutations = {
    [MutationTypes.toggleMenuState](state: State): void
}