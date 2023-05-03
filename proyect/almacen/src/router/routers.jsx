import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from '../components/layout/Layout'
// import { Details } from '../pages/Details'
// import { Home } from '../pages/Home'
import  LoginForm  from '../pages/LoginForm'
// import { User } from '../pages/User'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route index element={<LoginForm />} />
        {/* <Route exact={true} path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/user" element={<User />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}