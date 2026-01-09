import ArrowDown from "./components/icons/ArrowDown"
import Navbar from "./components/main/Navbar"
import ProfileHeader from "./components/sidebar/ProfileHeader"


function App() {

  return (
      <div className="bg-background-white flex h-screen w-screen overflow-hidden">
        <div className=" w-56 bg-primary py-4 px-2">
          <ProfileHeader />
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
          </main>
        </div>
      </div>
  )
}

export default App
