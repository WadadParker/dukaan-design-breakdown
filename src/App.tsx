import ArrowDown from "./components/icons/ArrowDown"
import Navbar from "./components/main/Navbar"
import logo from "./assets/logo.png"
import ArrowDownWhite from "./components/icons/ArrowDownWhite"

function App() {

  return (
      <div className="bg-background-white flex h-screen w-screen overflow-hidden">
        <div className=" w-56 bg-primary py-4 px-2">
          <header className='flex space-x-3 px-2.25'>
            <img src={logo} alt='user profile' width={39} height={39} className=' rounded object-cover' />
            <aside className='grow space-y-1'>
                <h1 className='text-white font-medium text-[15px]'>Nishyan</h1>
                <p className=' text-[13px] leading-4 text-white/80 underline hover:cursor-pointer w-fit'>Visit store</p>
            </aside>
            <ArrowDownWhite />
          </header>
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
