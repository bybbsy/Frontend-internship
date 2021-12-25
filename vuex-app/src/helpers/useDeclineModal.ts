import store from '../store/index'

function declineClickHandler() {
    store.commit('closeModal')
}

export {declineClickHandler}
