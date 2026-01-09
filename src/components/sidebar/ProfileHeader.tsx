import logo from "../../assets/logo.png"
import ArrowDownWhite from "../icons/ArrowDownWhite" 

const ProfileHeader = () => {
  return (
    <header className='flex space-x-3 px-2.25'>
    <img src={logo} alt='user profile' width={39} height={39} className=' rounded object-cover' />
    <aside className='grow space-y-1'>
        <h1 className='text-white font-medium text-[15px]'>Nishyan</h1>
        <p className=' text-[13px] leading-4 text-white/80 underline hover:cursor-pointer w-fit'>Visit store</p>
    </aside>
    <ArrowDownWhite />
    </header>
  )
}

export default ProfileHeader