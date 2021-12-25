export interface ModalData {
    name: string,
    showModal: boolean
}

export interface State {
    modalData: ModalData,
    showMenu: boolean,
    receivedProducts: object[]
}

export const state: State = {
    modalData: {
        name: '',
        showModal: false
    },
    showMenu: false,
    receivedProducts: []
}