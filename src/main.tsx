import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormState from './views/form-state.tsx';
import FormStatus from './views/form-status.tsx';
import Optimistic from './views/optimistic.tsx';
import Links from './views/links.tsx';
import Transition from './views/transition.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Links/>},
      {path: `/form-state`, element: <FormState/>},
      {path: `/form-status`, element: <FormStatus/>},
      {path: `/transition`, element: <Transition/>},
      {path: `/optimistic`, element: <Optimistic/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
