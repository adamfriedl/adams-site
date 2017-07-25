import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'rebass'
// import {createStore, applyMiddleware, compose} from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers'
import App from './App'


// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// )

ReactDOM.render(
    <Provider
      theme={{
        font: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      }}
      style={{lineHeight: 1.35}}
    >
      <App />
    </Provider>,
    document.getElementById('root')
)

