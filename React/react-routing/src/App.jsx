import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamCompo from './components/ParamCompo';
import Courses from './components/Courses';
import Report from './components/Report';
import Tests from './components/Tests';
import Notfound from './components/Notfound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: "/dashboard",
      element: <div>
        <Navbar />
        <Dashboard />
      </div>,
      children: [
        {
          path: "course",
          element: <Courses />
        },
        {
          path: "report",
          element: <Report />
        },
        {
          path: "test",
          element: <Tests />
        }
      ]
    },
    {
      path: "/student/:id",
      element: <div>
        <Navbar />
        <ParamCompo />
      </div>
    },
    {
      path:"*",
      element: <Notfound />
    }
  ]
);



function App() {

  return (
    //  <BrowserRouter>
    <div>
      <RouterProvider router={router} />
      {/* <Navbar /> */}
    </div>

    //  </BrowserRouter>

  )
}

export default App
