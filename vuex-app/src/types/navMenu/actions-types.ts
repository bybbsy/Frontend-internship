import { ActionContext } from "vuex";
import { State } from "./state-types";
import { RootState } from "@/store/index";

export enum ActionTypes {
    toggleMenu = "toggleMenu"
}

export interface Actions {
    [ActionTypes.toggleMenu]({commit}: ActionContext<State, RootState>): void
}