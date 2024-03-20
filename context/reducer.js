export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SELECTED_ADDRESS": {
            return { ...state, selectedAddress: action?.payload }
        }
        case "SET_ACCESS_TOKEN": {
            return { ...state, accessToken: action?.payload }
        }
        default:
            return state
    }
}