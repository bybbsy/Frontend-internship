import {InjectionKey} from 'vue';
import {createStore, Store, useStore as baseUseStore} from 'vuex'

// Importing state of each module
import { State as modalsState} from './Modals/state';
import { State as menuState } from './navMenu/state';
import { State as ProductsState } from './Products/state';

// Importing modules
import { moduleModals } from './Modals/index'
import { moduleNavMenu } from './navMenu/index';
import { moduleProducts } from './Products/index'

// Injection key for implementing in components
export const key: InjectionKey<Store<RootState>> = Symbol();

// Register general state as RootState
export type RootState = {
    menu: menuState
    modals: modalsState,
    products: ProductsState
}

export const store = createStore({
    modules: {
        moduleNavMenu,
        moduleModals,
        moduleProducts
    }
})

export function useStore() {
    return baseUseStore(key);
}