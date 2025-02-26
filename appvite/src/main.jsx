// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

import App from './App.jsx'
const reactElement = {
  type: 'a',
  props: {
    href: "https://www.google.com",
    target: '_blank'
  },
  children: 'click me to visit google'
}
function MyApp() {
  return (<div><h1>custom react app</h1></div>)
}
const AnotherElement = (
  <a href='http://www.google.com' target='_blank'>visit google</a>
)
const areactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: "_blank" },
  'click to visit google',
  username
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // areactElement
  <App></App>
  // reactElement
  // </StrictMode>,
)
