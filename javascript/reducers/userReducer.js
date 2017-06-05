export function userReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_DATA':
      let nameIndex = state.userName.indexOf(action.data.name)
      // check if Name already avaialable or not 
      if(nameIndex > -1) {
        // update the state userList array if name is availalbe with previous data
        return Object.assign({}, state, {
          userList: state.userList.slice(0, nameIndex).concat({ 
              data: {
                name: action.data.name,
                datanew: action.data
              },
              arrSparkline: state.userList[nameIndex].arrSparkline.concat((action.data.bestBid + action.data.bestAsk) / 2)
            }).concat(state.userList.slice(nameIndex + 1))
          })
      }

      else{
        // insert into state userList array if similar name is not available
        return Object.assign({}, state, {
          userName: state.userName.concat(action.data.name),
          userList: state.userList.concat({
                  data: {
                    name: action.data.name,
                    datanew: action.data
                  },
                  arrSparkline: [(action.data.bestBid + action.data.bestAsk) / 2]
                })
        });
      }
    default:
      return state
  }
}

