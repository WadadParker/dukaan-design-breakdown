import ArrowDown from "../components/icons/ArrowDown"
import AmountCard from "../components/main/AmountCard"
import Navbar from "../components/main/Navbar"
import Table from "../components/main/Table"
import AvailbleCredits from "../components/sidebar/AvailableCredits"
import NavItems from "../components/sidebar/NavItems"
import ProfileHeader from "../components/sidebar/ProfileHeader"


const Home = () => {
  return (
    <div className="bg-background-white flex h-screen w-screen ">
        <div className="h-full w-56 bg-primary flex flex-col py-4 px-2  ">
          <ProfileHeader />
          <NavItems />
          <AvailbleCredits />
        </div>
        <div className="grow overflow-y-scroll ">
          <Navbar />
          <main className="px-7 pt-6 space-y-6 ">
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

            <h1 className='text-text-dark text-xl font-medium pt-6'>Transactions | This Month</h1>
            <aside className=' space-x-3'>
              <span className='py-1.5 px-4 bg-secondary rounded-full text-sm font-medium text-white'>Payouts {"(22)"}</span>   
              <span className='py-1.5 px-4 bg-background-light rounded-full text-sm font-medium text-[#808080] 
              hover:text-secondary hover:cursor-pointer transition-all ease-linear'>Refunds {"(6)"}</span>
            </aside>

            <Table />
          </main>
        </div>
      </div>
  )
}

export default Home