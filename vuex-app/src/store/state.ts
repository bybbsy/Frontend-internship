export interface ModalData {
    name: string,
    showModal: boolean
}

export interface Albums {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    url: string
}

export interface State {
    modalData: ModalData,
    showMenu: boolean,
    receivedProducts: Array<Albums>
}

export const state: State = {
    modalData: {
        name: '',
        showModal: false
    },
    showMenu: false,
    receivedProducts: []
}