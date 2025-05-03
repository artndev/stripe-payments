import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/css/index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { storeConfig } from './storeConfig'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={storeConfig}>
      <App />
    </Provider>
  </React.StrictMode>
)
