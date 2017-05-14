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
    		store.dispatch({
      		type: 'FETCH_DATA',
          data
    		})
	    }
      else {
        store.dispatch({
          type: 'UPDATE_DATA',
          data
        })
      }
    });
  }
  
  client.connect({}, connectCallBack, function(error) {
    console.log('connection to stomp client failed')
  })
}