import { createStore } from 'vuex'

export default createStore({
  state: {
    modalData: {
      name: '',
      showModal: false
    },
    showMenu: false
  },
  mutations: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
    toggleModal(state, event) {
      // If nav menu is open calls toggleMenu and then opens a modal
      if(state.showMenu) {
        this.commit('toggleMenu');
      }

      state.modalData.showModal = !state.modalData.showModal;
      // Length of the class to receive the last word
      // which displays the name of link and the name of modal window to show
      let len = event.target.classList.length;
      // Puts the name of link in the name of modal to show
      state.modalData.name = event.target.classList[len - 1];
    },
    setModalData(state, payload) {
      state.modalData = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    // Return data to use it in components
    modalData(state) {
      return state.modalData;
    },
    showMenu(state) {
      return state.showMenu;
    }
  }
})
