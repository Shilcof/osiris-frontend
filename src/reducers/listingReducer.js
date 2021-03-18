export default function listingReducer(state = {
    latest: [],
    latestPageNumber: 0,
    local: [],
    localPageNumber: 0,
    filter: "latest",
    show: {},
    loading: false,
    shouldRedirect: false
}, action) {
    switch (action.type) {

        case "LOADING_LISTINGS":
            return {...state, loading: true}

        case "ADD_LISTINGS":
            return {
                ...state, 
                [state.filter+"PageNumber"]: state[state.filter+"PageNumber"] + 1,
                [state.filter]: [...state[state.filter], ...action.listings], 
                loading: false,
                show: {}
            }

        case "ADD_LISTING":
            if (state.filter !== "latest" || state[state.filter].length === 0) return {...state, shouldRedirect: true}
            return {...state, [state.filter]: [action.listing, ...state[state.filter]]}

        case "SHOW_LISTING":
            return {...state, show: action.listing, loading: false, shouldRedirect: true}

        case "ADD_ERRORS":
            return {...state, loading: false}

        case "REDIRECTED":
            return {...state, shouldRedirect: false}

        // case "DELETE_LISTING":
        //     const index = state.findIndex(r=>r.id===action.id)
        //     return [...state.slice(0,index), ...state.slice(index+1)]

        default:
            return state
    }
}
