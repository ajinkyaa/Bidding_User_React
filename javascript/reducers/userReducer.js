export function userReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA':
     var midPrice = action.data.bestBid + action.data.bestAsk / 2
      var updatedBid = {
        data: action.data,
        arrSparkline: [midPrice]
      }
      return Object.assign({}, state, {
        message: state.items.push(updatedBid)
			
      });

    case 'UPDATE_DATA':
      var midPrice = action.data.bestBid + action.data.bestAsk / 2
      
      var newState = state.items.filter(function(data) {
        return data.data.name !== action.data.name
      })  
      
      var oldStateItem = state.items.filter(function(data) {
        return data.data.name == action.data.name
      })  
      
      oldStateItem[0].arrSparkline.push(midPrice)

      return Object.assign({}, state, {
        items: [ ...newState, ... oldStateItem] 
      });
      
    default:
      return state
  }
}

