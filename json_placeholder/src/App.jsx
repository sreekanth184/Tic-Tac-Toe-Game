import Home_page from "./pages/Home_page"
import { Route, Routes } from "react-router-dom"
import User_page from "./pages/User_page"
// import './App.css'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home_page/>} />
      <Route path="/users/:userId" element={<User_page/>}/>
      <Route path="/posts/:postId" element={<User_page/>}/>
      <Route path="/albums/:albumId" element={<User_page/>}/>
    </Routes>
  )
}

export default App
