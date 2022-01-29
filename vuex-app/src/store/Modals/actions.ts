import { State } from "@/types/Modals/state-types";
import { ActionTree } from "vuex";
import { MutationTypes } from "@/types/Modals/mutations-types";
import { RootState } from "@/store/index";
import { ActionTypes, Actions } from '@/types/Modals/actions-types';

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.toggleModal]({commit}, payload) {
        commit(MutationTypes.setModalData, payload)
    }
}

// Types for store/Modals replaced in the separated folder