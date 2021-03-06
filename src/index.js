import React from 'react';
import { render } from 'react-dom'
import configureStore from './common/store/configureStore'

// Containers
import Root from './common/containers/Root'

const store = configureStore()


render(
  <Root store={store} />,
  document.getElementById('root')
)