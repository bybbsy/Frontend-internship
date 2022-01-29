import { Albums } from "./state-types";
import { State } from "./state-types";

export enum MutationTypes {
    setProducts = 'SET_PRODUCTS'
}

export type Mutations = {
    [MutationTypes.setProducts](state: State, products: Albums[]): void
}