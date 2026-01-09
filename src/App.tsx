import ArrowDown from "./components/icons/ArrowDown"
import ArrowRight from "./components/icons/ArrowRight"
import QuestionMark from "./components/icons/QuestionMark"
import AmountCard from "./components/main/AmountCard"
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
          <main className="px-7 pt-6 space-y-6">
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

            <ul className="flex gap-x-4">
              <AmountCard blueCard title="Next Payout" amount="2,312.23" orders={23}/>
              <AmountCard title="Amount Pending" amount="92,312.20" orders={13}/>
              <AmountCard title="Amount Processed" amount="23,92,312.19"/>
            </ul>

          </main>
        </div>
      </div>
  )
}

export default App
