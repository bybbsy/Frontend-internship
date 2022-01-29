import { State, Albums } from './state-types';

export type Getters = {
    getReceivedProducts(state: State): Albums[]  
}