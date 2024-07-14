import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import { RouterProvider} from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Projects from './Components/Projects.jsx';
import Shop from './Components/Shop.jsx';
import Contact from './Components/Contact.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
       path:'/',
       element:<Home/>
    },
      {
          path:'/About',
          element:<About/>
      },
      {
        path:'/Skills',
        element:<Skills/>
    },
    {
      path:'/Projects',
      element:<Projects/>
  },
  {
    path:'/Shop',
    element:<Shop/>
},
{
  path:'/Contact',
  element:<Contact/>
}

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
