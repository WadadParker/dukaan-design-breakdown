import Navbar from "./components/main/Navbar"

function App() {

  return (
      <div className="bg-background-white flex h-screen w-screen overflow-hidden">
        <div className=" w-56 bg-primary "></div>
        <div className="grow ">
          <Navbar />
        </div>
      </div>
  )
}

export default App
