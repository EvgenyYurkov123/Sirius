import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout/Layout'
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Shedule from './Pages/Schedule/Shedule';
import Main from './Pages/Main/Main';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/reg", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/schedule", element: <Shedule /> },
    { path: "/main", element: <Main /> },
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
