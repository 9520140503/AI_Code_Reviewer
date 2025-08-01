import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Converter,EditProfile,Home,Login,ReviewCode,Signup,Summarize, ViewProfile} from "./Pages/index.js"
import AuthLayout from './Components/AuthLayout.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:"/login",
        element:<AuthLayout authenticaiton={false}>
          <Login/>
        </AuthLayout>
      },{
        path:"/signup",
        element:<AuthLayout authenticaiton={false}>
          <Signup/>
        </AuthLayout>
      },{
        path:"/review-code",
        element:<AuthLayout authenticaiton={true}>
          <ReviewCode/>
        </AuthLayout>
      },{
        path:"/summarizer",
         element:<AuthLayout authenticaiton={true}>
          <Summarize/>
        </AuthLayout>
      },{
         path:"/code-converter",
         element:<AuthLayout authenticaiton={true}>
          <Converter/>
        </AuthLayout>
      },{
        path:'/view-profile',
         element:<AuthLayout authenticaiton={true}>
          <ViewProfile/>
        </AuthLayout>
      },{
        path:'/update-profile',
         element:<AuthLayout authenticaiton={true}>
          <EditProfile/>
        </AuthLayout>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
