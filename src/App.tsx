import ChatIcon from "./components/icons/ChatIcon"
import Chevron from "./components/icons/Chevron"
import QuestionMark from "./components/icons/QuestionMark"
import SearchBar from "./components/icons/SearchBar"
import IconButton from "./components/kit/IconButton"

function App() {

  return (
      <div className="bg-background-white flex h-screen w-screen overflow-hidden">
        <div className=" w-56 bg-primary "></div>
        <div className="grow ">
          <nav className="flex justify-evenly items-center p-4">
            <section className="flex grow justify-center gap-x-1.5 items-center">
              <QuestionMark />
              <small className="text-text">How it works?</small>
            </section>
            <SearchBar />
            <section className="flex grow justify-end justify-self-end items-center gap-x-4 ">
              <IconButton padding="p-3">
                <ChatIcon />
              </IconButton>
              <IconButton padding="p-4">
                <Chevron />
              </IconButton>
            </section>
          </nav>
        </div>
      </div>
  )
}

export default App
