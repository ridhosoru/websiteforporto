import { useState } from "react"
import Content from "./Content/Content"
import Navbar from "./Navbar/Navbar"

export default function App(){
  const [menu,setMenu] = useState(false)
  return(
    <div className="hidden lg:block">
      <div className="flex bg-black">
        <div className={`flex w-5/6 mx-auto`}>
          <Navbar menu={menu} setMenu={setMenu}/>
          
          <Content menu={menu}/>
        </div>
      </div>
    </div>
    
   
  )
}
