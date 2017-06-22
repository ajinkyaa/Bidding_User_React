export function userReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_DATA':
      let nameIndex = state.userName.indexOf(action.data.name)
      let newState = {}

      if(nameIndex > -1) {
        newState = {
          userList: [...state.userList.slice(0, nameIndex), { 
              data:  action.data,
              arrSparkline: [...state.userList[nameIndex].arrSparkline, (action.data.bestBid + action.data.bestAsk) / 2]
            }, ...state.userList.slice(nameIndex + 1)]
          }
      }

      else {
        newState = {
          userName: [...state.userName, action.data.name],
          userList: [...state.userList, {
                  data: action.data,
                  arrSparkline: [(action.data.bestBid + action.data.bestAsk) / 2]
                }]
          }
        }

      return Object.assign({}, state, newState) 

    default:
      return state
  }
}

