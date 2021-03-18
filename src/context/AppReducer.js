
export default (state, action)=> {
    switch(action.type) {
    case "ADD_FRUIT_TO_WATCHLIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case "REMOVE_FRUIT_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(fruit => fruit.name !== action.payload),
      };
        default:
          return state
    }
}