import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Dashboard/Home/Home';
import Courses from './components/Dashboard/Courses/Courses';
import SideNav from './components/SideNav/SideNav';

function App() {
  const routes = createBrowserRouter([
          {
            path: "/",
            element: <SideNav></SideNav>,
            children: [
              {
                path: "/",
                element: <Home></Home>
              },
              {
                path: "/courses",
                element: <Courses></Courses>
              }
            ]
          }        
  ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
