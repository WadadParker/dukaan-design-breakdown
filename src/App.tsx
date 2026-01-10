import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Animations from "./Pages/Animations"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="animations" element={<Animations />} />

    </Routes>
  )
}

export default App
