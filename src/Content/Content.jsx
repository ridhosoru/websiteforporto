import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import Project from "../Project/Project";
import Activity from '../Activity/Activity';



export default function Content({menu}){
    return(
        <div className={`relative  transition-all outline outline-1 outline-gray-700 duration-500 ease-in-out ${menu ? 'w-[100%]' : 'w-[75%]'}`}>
            <Routes>
                <Route path="/" element={<Home menu={menu}/>} />
                <Route path="/project" element={<Project menu={menu} />} />
                <Route path="/activty" element={<Activity />} />
            </Routes>
        </div>
            
    )
}