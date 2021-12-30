import {InjectionKey} from 'vue';
import {State, state} from './state'
import {mutations} from './mutations';
import {actions} from './actions';
import {getters} from './getters';
import {createStore, Store, useStore as baseUseStore} from 'vuex'

// Injection key for implementing in components
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state,
    mutations,
    actions,
    getters
})

export function useStore() {
    return baseUseStore(key);
}