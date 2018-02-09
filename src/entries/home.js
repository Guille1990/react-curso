import React from 'react'
import { render } from 'react-dom'
import { Home } from '../pages/containers/home'
import data from '../api'

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde se va a renderizar)
render(<Home data={data}/>, homeContainer)
