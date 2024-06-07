import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout/Layout'
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Shedule from './Pages/Schedule/Shedule';

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    // { path: "/reg", element: <Reg /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/schedule", element: <Shedule /> },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
