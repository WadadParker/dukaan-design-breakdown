import ArrowDown from "./components/icons/ArrowDown"
import ArrowRight from "./components/icons/ArrowRight"
import QuestionMark from "./components/icons/QuestionMark"
import Navbar from "./components/main/Navbar"
import NavItems from "./components/sidebar/NavItems"
import ProfileHeader from "./components/sidebar/ProfileHeader"


function App() {

  return (
      <div className="bg-background-white flex h-screen w-screen overflow-hidden">
        <div className=" w-56 bg-primary py-4 px-2">
          <ProfileHeader />
          <NavItems />
        </div>
        <div className="grow ">
          <Navbar />
          <main className="px-7 pt-6">
            <section className='flex justify-between items-center'>
              <h1 className='text-text-dark text-xl font-medium'>Overview</h1>
              <aside className='relative bg-white'>
                <select className=' py-1.5 pl-3.5 pr-9 hover:cursor-pointer appearance-none bg-white border border-border rounded-md text-text '>
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
                <ArrowDown />
              </aside>
            </section>
            <ul className="flex">
              <li className="rounded-md bg-white p-4 space-y-2">
                <header className="flex items-center gap-x-2">
                  <h1 className="text-text">Amount Pending</h1>
                  <QuestionMark />
                </header>

                <aside className="flex justify-between">
                  <h1 className=" text-3xl font-medium">₹23,72.20</h1>
                  <button className="flex items-center underline gap-x-2.5">
                    <p className="mb-1">13 order</p>
                    <ArrowRight />
                  </button>
                </aside>
              </li>
            </ul>
          </main>
        </div>
      </div>
  )
}

export default App
