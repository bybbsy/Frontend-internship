import { State } from "@/types/Products/state-types";
import { state } from "./state";
import { RootState } from "../index";
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { Module } from "vuex";


export const moduleProducts: Module<State, RootState> = {
    state,
    mutations,
    actions,
    getters
}