const initialStateHome = {
    dataBlog: [],
}

const homeReduser = (state = initialStateHome, action) => {
    if (action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }

    if (action.type === 'UPDATE_NAME') {

    }
    return state;
}

export default homeReduser; 