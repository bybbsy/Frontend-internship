import { State } from "./state-types";
import { ActionContext } from "vuex";
import { RootState } from "@/store/index";

export enum ActionTypes {
    fetchProducts = 'fetchProducts'
}

export interface Actions {
    [ActionTypes.fetchProducts]({commit}: ActionContext<State, RootState>): void,
}