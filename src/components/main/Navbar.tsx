import ChatIcon from "../icons/ChatIcon"
import Chevron from "../icons/Chevron"
import QuestionMark from "../icons/QuestionMark"
import SearchBar from "../icons/SearchBar"
import IconButton from "../kit/IconButton"

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center p-4">
    <section className="flex grow justify-center gap-x-1.5 items-center">
        <QuestionMark />
        <small className="text-text">How it works?</small>
    </section>

    <SearchBar />

    <section className="flex grow justify-end items-center gap-x-4 ">
        <IconButton padding="p-3">
        <ChatIcon />
        </IconButton>
        <IconButton padding="p-4">
        <Chevron />
        </IconButton>
    </section>
    </nav>
  )
}

export default Navbar