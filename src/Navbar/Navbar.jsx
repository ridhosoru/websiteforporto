import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaHome,FaProjectDiagram  } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { Link,useLocation } from 'react-router-dom';
export default function Navbar({menu,setMenu}){
    const location = useLocation();
    const NavbarItem = [
        {icon:<FaHome/>, name: 'Home', path:'/'},
        {icon:<FaProjectDiagram/>, name: 'Project', path:'/project'},
        {icon:<FiActivity/>, name: 'Activty', path : '/activity'},
    ];
    return(
        <div className={`${menu ?  'w-20 h-screen overflow-hidden transition-all duration-500 ease-in-out' : 'w-1/4 h-screen overflow-visible transition-all duration-500 ease-in-out' }`}>
            <div className={`w-[100%] h-10 ${!menu ? 'flex justify-between items-center': 'flex items-center justify-center'}`}>
                
                <div className={`${menu ? 'w-0 overflow-hidden' : 'overflow-visible w-20 p-20 transition-all duration-500' }  text-white font-bold`}>Welcome</div>
             
                <a  href="#" 
                    className={`absolute top-3 ${menu ? 'left-[122px]' : 'left-[300px]'} text-white text-xl transition-all duration-500`}
                    onClick={(e)=>{
                        e.preventDefault();
                        setMenu(!menu);
                        console.log(menu);
                    }}
                ><FaArrowRightArrowLeft/></a>
            </div>
            <div className={`${menu ? 'flex flex-col w-[100%] ' : 'flex w-[100%] h-[150px] ' }  mt-5`}>
                <div className={`absolute  ${menu ? 'h-10 w-10 left-[115px]' : ' left-[170px] h-20 w-20' } transition-all duration-500 bg-white rounded-full mt-2`}></div>
                <div className={`${menu ? 'overflow-hidden': 'overflow-visible text-white mt-[100px] ml-[75px] transition-all duration-500'} `}>Ridho Soru</div>
            </div>
            <div className={`${menu ? 'top-[200px] left-[120px]  absolute w-[40px] h-[300px]' : 'absolute top-[200px] left-[120px] w-[200px] h-[300px] ' }  flex flex-col mt-5`}>
                {NavbarItem.map((item,index)=>(
                    <Link  to={item.path} 
                        key={index}
                        className={`flex h-10 ${menu ? 'w-[45px] transition-all duration-500': 'w-[200px] transition-all duration-500'} items-center ${location.pathname === item.path ? 'bg-gray-500 rounded-lg' : 'bg-transparent' } `}>
                        <div className={`text-white text-2xl mr-5 pl-2`}>{item.icon}</div>
                        <div className={`${menu ? 'w-0 overflow-hidden p-0' : 'w-10 overflow-visible  text-white  '} pl-1 transition-all duration-500`}>{item.name}</div>
                    </Link>
                ))}


            </div>
        </div>
        
    )
}