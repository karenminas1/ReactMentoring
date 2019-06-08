export default function(state=null, action) {
    switch (action.type) {
        case "ALL_MOVIES_SELECTED":
            return  action.payload;
        case "FOUND_MOVIES":
            return  action.payload;
            break;
        default:
            return state;
    }
}