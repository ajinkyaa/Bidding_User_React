import store from '../store'
export function fetchUsers() {
  global.DEBUG = false
  const stompUrl = "ws://localhost:8011/stomp"
  const client = Stomp.client(stompUrl)
  client.debug = function(msg) {
  if (global.DEBUG) {
      console.info(msg)
    }
  }

  function connectCallBack() {
    client.subscribe('/fx/prices', function(message) {
      var data = JSON.parse(message.body)
      store.dispatch({
        type: 'FETCH_DATA', 
        data 
      })
    });
  }
  
  client.connect({}, connectCallBack, function(error) {
    console.log('connection to stomp client failed')
  })
}

