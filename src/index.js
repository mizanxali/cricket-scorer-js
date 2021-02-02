import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
)
