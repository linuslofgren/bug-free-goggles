import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Composition from './components/Composition/Composition'

import store from './store'

ReactDOM.render(<Provider store={store}><Composition /></Provider>, document.querySelector('.reactRoot'))
