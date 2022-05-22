export const incViews = (id) => {
    return {
        type: 'INCREMENT_VIEWS',
        payload: id

    }
}

export const initializeViews = (viewsArray) => {
    return {
        type: 'INITIALIZE_VIEWS',
        payload: viewsArray

    }
}