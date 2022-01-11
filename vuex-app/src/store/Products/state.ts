export interface Albums {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    url: string
}

export interface State {
    receivedProducts: Array<Albums>
}

export const state: State = {
    receivedProducts: []
}