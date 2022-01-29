import { State } from "@/types/navMenu/state-types";
import { state } from "./state";
import { RootState } from "../index";
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { Module } from "vuex";


export const moduleNavMenu: Module<State, RootState> = {
    state,
    mutations,
    actions,
    getters
}