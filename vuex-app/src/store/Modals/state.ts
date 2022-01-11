export interface ModalData {
    name: string,
    showModal: boolean
}

export interface State {
    modalData: ModalData
}

export const state: State = {
    modalData: {
        name: '',
        showModal: false
    }
}