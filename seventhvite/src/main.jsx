import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { RouterProvider } from 'react-router'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='user/' element={<User></User>}>
        <Route path=':userid' element={<User></User>}></Route>
      </Route>
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github></Github>}></Route>
      <Route path="*" element={<div>not found</div>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
