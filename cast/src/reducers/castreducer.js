import {UPLOAD_CAST, FETCH_CAST} from '../actions/castactions';

const initialState = {
    podcast: [],
}

const castReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPLOAD_CAST:
            return {
                ...state,
                podcast: [...state.podcast, action.payload]
            }
        case FETCH_CAST:
            return {
                ...state,
                podcast: action.payload
            }
        default:
            return state;
    }
}

export default castReducer;