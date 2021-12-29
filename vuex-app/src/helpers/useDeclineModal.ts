import {store} from '../store/index'
import {emptyModalData} from './variables';

function declineClickHandler() {
    store.dispatch('toggleModal', emptyModalData)
}

export {declineClickHandler}