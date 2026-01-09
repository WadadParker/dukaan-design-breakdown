import type { ReactNode } from "react"

const IconButton = ({padding,children}:{padding:string,children:ReactNode}) => {
  return (
    <button className={` rounded-full bg-background-dark ${padding} `}>
        {children}
    </button>
  )
}

export default IconButton