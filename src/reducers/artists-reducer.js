
const initialState = {
    currentArtist: null,
    status: 'loading',
    error: null,
};

export default function artistsReducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_ARTIST_INFO': {
            return {
                ...state,
                status: "loading",
                error: null
            };
        }
        case 'RECEIVE_ARTIST_INFO': {
            return {
                ...state,
                currentArtist: {
                    ...state.currentArtist,
                    profile: action.artist                    
                }, 
                status: "idle"
            };
        }
        case 'RECEIVE_ARTIST_INFO_ERROR': {
            return {
                ...state,                
                status: "error",
                error: action.error
            };
        }
        default: {
            return state;
        }
    };
};