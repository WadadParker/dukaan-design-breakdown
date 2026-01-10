import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Animations from "./Pages/Animations"
import Layout from "./Pages/Layout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="animations" element={<Animations />} />
      <Route path="layout" element={<Layout />} />

    </Routes>
  )
}

export default App
