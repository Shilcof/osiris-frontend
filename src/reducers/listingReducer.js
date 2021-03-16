export default function listingReducer(state = {
    latest: {},
    latestPageNumber: 0,
    local: {},
    localPageNumber: 0,
    filter: "latest",
    loading: false
}, action) {
    switch (action.type) {
        case "LOAD_LISTINGS":
            return {...state, loading: true}
        case "ADD_LISTINGS":
            return {...state, [state.filter]: [...state[state.filter], ...action.listings], loading: false}

        // case "ADD_LISTING":
        //     return [...state, {...action.review, id: cuid()}]
        // case "DELETE_LISTING":
        //     const index = state.findIndex(r=>r.id===action.id)
        //     return [...state.slice(0,index), ...state.slice(index+1)]
        default:
            return state
    }
}
