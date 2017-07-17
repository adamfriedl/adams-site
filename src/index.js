import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App'


// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// )

// const WrappedApp = props => (
//     <Provider>
//       <App />
//     </Provider>
// )

ReactDOM.render(
      <App />,
    document.getElementById('root')
)

