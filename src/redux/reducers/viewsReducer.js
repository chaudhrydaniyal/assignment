import { incrementViews } from "./views.utils";


const initialState = 0;

const viewsReducer = (state = initialState, action) => {
    switch (action.type) {

        case "INITIALIZE_VIEWS": return action.payload;

        case "INCREMENT_VIEWS": return incrementViews(state, action)

        default: return state;
    }
}


export default viewsReducer;