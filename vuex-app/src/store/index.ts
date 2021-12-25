import {InjectionKey} from 'vue';
import {State, state} from './state'
import { mutations } from './mutations';
import {createStore, Store} from 'vuex'

// Injection key for implementing in components
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state,
    mutations
})
// Store
// export const store = createStore<State>({
//     state: {
//         modalData: {
//             name: '',
//             showModal: false
//         },
//         showMenu: false,
//         receivedProducts: []
//     },
    // mutations: {
    //     toggleMenu(state) {
    //         state.showMenu = !state.showMenu;
    //     },
    //     toggleModal(state, event) {
    //         // If nav menu is open calls toggleMenu and then opens a modal
    //         if (state.showMenu) {
    //             store.commit('toggleMenu');
    //         }

    //         state.modalData.showModal = !state.modalData.showModal;
    //         // Length of the class to receive the last word
    //         // which displays the name of link and the name of modal window to show
    //         const len = event.target.classList.length;
    //         // Puts the name of link in the name of modal to show
    //         state.modalData.name = event.target.classList[len - 1];
    //     },
    //     setModalData(state, payload) {
    //         state.modalData = payload;
    //     },
    //     closeModal() {
    //         store.commit('setModalData', {
    //             name: '',
    //             showModal: false
    //         })
    //     },
    //     setProducts(state, products) {
    //         state.receivedProducts = products
    //     }
    // },
//     actions: {
//         async fetchProducts(context) {
//             return fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
//                 .then(response => response.json())
//                 .then(json => {
//                     context.commit('setProducts', json)
//                 })
//                 .catch(e => console.log('error: ', e))
//         }
//     },
//     modules: {},
//     getters: {
//         // Return data to use it in components
//         modalData(state) {
//             return state.modalData;
//         },
//         showMenu(state) {
//             return state.showMenu;
//         },
//         getReceivedProducts(state) {
//             return state.receivedProducts
//         }
//     }
// })
