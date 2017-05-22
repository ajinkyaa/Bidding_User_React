export function fetchUsers(store) {
  global.DEBUG = false
  const stompUrl = "ws://localhost:8011/stomp"
  const client = Stomp.client(stompUrl)
  client.debug = function(msg) {
  if (global.DEBUG) {
      console.info(msg)
    }
  }

  function connectCallBack() {
    var dataName = []
    client.subscribe('/fx/prices', function(message) {
      var data = JSON.parse(message.body)
      var arrayIndex = dataName.indexOf(data.name)
      if( arrayIndex == -1) {
        dataName.push(data.name)
        dispatchAction('FETCH_DATA', data)
	    }
      else {
        dispatchAction('UPDATE_DATA', data)
      }
    });
  }
  
  client.connect({}, connectCallBack, function(error) {
    console.log('connection to stomp client failed')
  })

  function dispatchAction(action, newData) {
    return store.dispatch({
            type: action,
            data: {
              name: newData.name,
              bestBid: newData.bestBid,
              bestAsk: newData.bestAsk,
              openBid: newData.openBid,
              openAsk: newData.openAsk,
              lastChangeAsk: newData.lastChangeAsk,
              lastChangeBid: newData.lastChangeBid
            }
          })
  }
}

