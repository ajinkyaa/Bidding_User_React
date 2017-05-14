export function userReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA':
      action.data["sparkline"] = [action.data.bestBid + action.data.bestAsk / 2]
      return Object.assign({}, state, {
        message: state.items.push(action.data)
			});
    case 'UPDATE_DATA':
      for(var i = 0; i < state.items.length; i++) {
        if (state.items[i].name === action.data.name) {
          let sparklineData = action.data.bestBid + action.data.bestAsk / 2
          state.items[i].bestBid = action.data.bestBid
          state.items[i].bestAsk = action.data.bestAsk
          state.items[i].openBid = action.data.openBid
          state.items[i].openAsk = action.data.openAsk
          state.items[i].lastChangeAsk = action.data.lastChangeAsk
          state.items[i].lastChangeBid = action.data.lastChangeBid
          state.items[i].sparkline.push(sparklineData)
        }
      }

    default:
      return state
  }
}

