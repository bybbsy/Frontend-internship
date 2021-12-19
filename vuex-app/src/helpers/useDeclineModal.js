import store from '../store/index.js'

function declineClickHandler() {
    store.commit('closeModal')
}

export {declineClickHandler}
