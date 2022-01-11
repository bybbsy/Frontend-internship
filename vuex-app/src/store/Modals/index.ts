import { State, state } from "./state";
import { RootState } from "@/store/index";
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { Module } from "vuex";


export const moduleModals: Module<State, RootState> = {
    state,
    mutations,
    actions,
    getters
}