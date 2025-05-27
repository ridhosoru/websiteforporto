import { motion } from "framer-motion";
import { FaPython,FaJs,FaReact,FaRaspberryPi,FaArrowRight,FaLinkedin,FaGithub,FaInstagram  } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiMysql } from "react-icons/di";
import { SiSqlite,SiQt,SiSublimetext,SiArduino  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { useState } from "react";

export default function Home({menu}){
    const [contact,setContact] = useState(false);
    const connitems = [
                    {icon : <FaLinkedin/>, link : "https://www.linkedin.com/in/ridhosoru/"},
                    {icon : <FaGithub/>, link : "https://github.com/ridhosoru"},
                    {icon :<FaInstagram/>, link : "https://www.instagram.com/ridhosoru/"}
                     ];

    const exp = [
        {instansi:'Batam State Polytechnic',division:'Electrical Engineering', year:'(2020-2024)'},
        {instansi:'PT.Philips Industries',division:'Data Analytic Engineering', year:'(2023-2024)'}
    ];
    const proexp =[
        {name :'Holographic LED Fan Display', position:'Project Leader,Program division',year :'(2021)'},
        {name :'Automation Selection Wire Box', position:'Software Developer,Microcontroller Programmer',year :'(2022)'},
        {name :'Classification Product using YOLO v7 and Raspy4B', position:'Software Developer,Microcontroller Programmer,ML',year :'(2023)'},
        {name :'Prediction Measurement using sklearn-decision tree', position:'Software Developer,ML',year :'2024'},
        {name :'MTC APP using PyQt6', position:'Software Developer',year :'2025'},
    ];
    const Pl = [
    {icon:<FaPython/>, name:'Python'},
    {icon:<FaJs/>, name:'Java Script'},
    ];
    const ToolsI=[
        {icon :<VscVscode/> ,  name:'VScode'},
        {icon :<DiMysql/> ,  name:'MySQL'},
        {icon :<SiSqlite/> ,  name:'SQLite'},
        {icon :<BiLogoPostgresql/> ,  name:'Postgresql'},
        {icon :<SiQt/> ,  name:'PythonQT'},
        {icon :<FaReact/> ,  name:'React'},
        {icon :<SiSublimetext/> ,  name:'Sublime'},
    ];

    const Micro=[
        {icon :<FaRaspberryPi/> ,  name:'Raspberry'},
        {icon :<SiArduino/> ,  name:'Arduino'},
    ];

    function Verticalpro(){
        return(
            <div className={`w-1 rounded-xl bg-[#FA812F] mt-7`}
                style={!menu ? { height: `${(proexp.length - 0.8) * 50}px` } : {}}
                        
                >
                    <div>
                        {proexp.map((item,index)=>(
                            <div    className="relative " 
                                    key={index}
                            >
                                <div    className={`absolute -translate-x-1 w-3 h-3 rounded-full bg-[#FA812F]`}
                                        style={{ top: `${index * 50}px`}}
                                ></div>
                                <div    className={`absolute flex flex-col ${index % 2 === 0  ? 'left-[4px]' : 'right-[4px]'}  -translate-y-1/2 items-center justify-center h-[40px] w-[140px] text-white`}
                                        style={{ top: `${index * 50}px` }}
                                >
                                    <div className=" text-[10px] text-center font-bold">{item.name}</div>
                                    <div className=" text-[8px] text-center italic text-gray-400">{item.position}</div>
                                    <div className=" text-[8px] text-gray-400">{item.year}</div>
                                </div>
                            </div>
                        ))}    
                </div>
        </div>

        )
    }

    function Verticalxp (){
        return(
        <div    className={`w-1 rounded-xl bg-[#FA812F] mt-7`}
                style={!menu ? { height: `${(exp.length - 0.8) * 50}px` } : {}}
                >
                    <div>
                        {exp.map((item,index)=>(
                            <div    className="relative " 
                                    key={index}
                            >
                                <div    className={`absolute -translate-x-1 w-3 h-3 rounded-full bg-[#FA812F]`}
                                        style={{ top: `${index * 50}px`}}
                                ></div>
                                <div    className={`absolute flex flex-col ${index % 2 === 0  ? 'left-[1px]' : 'right-[1px]'} -translate-y-1/2 items-center justify-center h-[40px] w-[140px] text-white`}
                                        style={{ top: `${index * 50}px` }}
                                >
                                    <div className=" text-[10px] font-bold">{item.instansi}</div>
                                    <div className=" text-[8px] italic text-gray-400">{item.division}</div>
                                    <div className=" text-[8px] text-gray-400">{item.year}</div>
                                </div>
                            </div>
                        ))}    
                </div>
        </div>
        )
    }
    function Horizonpro(){
        return(
            <div    className={`h-1 rounded-xl bg-[#FA812F] mt-[80px]`}
                    style={menu ? { width: `${(proexp.length - 1) * 100}px` } : {}}
            >
                {proexp.map((item,index)=>(
                    <div
                        className="relative" 
                        key={index}
                    >
                    <div    className={`absolute -translate-y-1 w-3 h-3 rounded-full bg-[#FA812F] `}
                            style={{ left: `${index * 100}px`}}
                    ></div>
                    <div    className={`absolute flex flex-col ${index % 2 === 0  ? 'bottom-[20px]' : 'top-[20px]'}  -translate-x-1/2 items-center justify-center h-[40px] w-[140px] text-white`}
                            style={{ left: `${index * 100 +3}px` }}
                    >
                        <div className=" text-[10px] font-bold">{item.name}</div>
                        <div className=" text-[8px] italic text-gray-400">{item.position}</div>
                        <div className=" text-[8px] text-gray-400 ">{item.year}</div>
                    </div>

                    </div>
                ))}
            </div>
        )
    }

    function Horizonexp(){
        return(
            <div    className={`h-1 rounded-xl bg-[#FA812F] mt-[70px]`}
                    style={menu ? { width: `${(exp.length - 0.8) * 50}px` } : {}}
            >
                {exp.map((item,index)=>(
                    <div
                        className="relative" 
                        key={index}
                    >
                    <div    className={`absolute -translate-y-1 w-3 h-3 rounded-full bg-[#FA812F]`}
                            style={{ left: `${index * 50}px`}}
                    ></div>
                    <div    className={`absolute flex flex-col ${index % 2 === 0  ? 'bottom-[20px]' : 'top-[20px]'}  -translate-x-1/2 items-center justify-center h-[40px] w-[140px] text-white`}
                            style={{ left: `${index * 50 +3}px` }}
                    >
                        <div className=" text-[10px] font-bold">{item.instansi}</div>
                        <div className=" text-[8px] italic text-gray-400 ">{item.division}</div>
                        <div className=" text-[8px] text-gray-400 ">{item.year}</div>
                    </div>

                    </div>
                ))}
            </div>
        )
    }
    return(
        <motion.div className="flex flex-col"
                    key={menu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
            <div className={`${menu ? 'w-[500px]': 'w-[500px]'} ml-4 mt-2 flex flex-col h-[200px]`}>
                <div className="flex gap-2">
                    <div className="text-white font-bold font-inter text-2xl"> Hello!</div> 
                    <motion.span
                        className="inline-block origin-bottom"
                        animate={{
                        rotate: [0, 10, -8, 5, -8, 10, 0],
                        }}
                        transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                        }} 
                    >👋</motion.span>
                </div>
                <div className="flex gap-2">
                    <div className="text-white font-inter font-bold text-2xl"> I'm</div>
                    <div className="text-[#FA812F] font-bold font-inter text-2xl"> Yohanes Ridho Soru</div>
                </div>
                <div>
                    <div className="text-gray-400 text-[12px]">Riau Island-Indonesia</div>
                </div>
                <div>
                    <div className="italic text-[12px] mt-2 font-inter text-white">"An ordinary guy with an interest in the world of programming and electricity"</div>
                </div>
                <div className=" flex gap-5 mt-2">
                    <button className={`buttonD`}>Download CV</button>
                    <button className={`${contact ? 'buttonC': 'buttonD'}`}
                            onClick={(e)=>{
                                e.stopPropagation();
                                setContact(!contact);
                            }}
                    >{contact ? <FaArrowRight/> : 'Contact Me'}</button>
                    {contact && (
                        connitems.map((item,index)=>(
                            <a 
                                key ={index}
                                href={item.link} 
                                target="_blank" 
                                className={`buttonC`}
                                >{item.icon}</a>
                            
                        ))
                    )}

                </div>
                
                <div className={`${menu ? 'w-[820px] ml-2' : ' w-[680px] '} transition-all duration-500  h-[2px] rounded-xl mt-10  bg-slate-600`}></div>
            </div>
            <div className="flex flex-col">
                <div className={`  ${menu ? 'w-[820px] h-[500px] ml-6' : 'w-[680px] h-[350px] ml-4 flex justify-between ' } transition-all duration-500 mt-2`}>
                    <div className={`${menu ? 'h-[250px]  ':' w-[300px] h-[100%] '} flex flex-col items-center transition-all duration-500 `}>
                        <div className="text-[#FA812F] font-inter font-bold">Experience</div>
                        <div className="mt-5"> 
                            {menu ? <Horizonexp /> : <Verticalxp />}
                        </div>
                    </div>
                    <div className={`${menu ? 'h-[250px]  ':' w-[300px] h-[100%]  '} flex flex-col items-center transition-all duration-500 `}>
                        <div className="text-[#FA812F] font-inter font-bold">Project Experience</div>
                        <div className="mt-5"> 
                            {menu ? <Horizonpro /> : <Verticalpro />}
                        </div>
                    </div>
                </div>
                <div className={`${menu ? 'w-[820px] ml-6' : ' w-[680px] ml-4'} transition-all duration-500  h-[2px] rounded-xl mt-5  bg-slate-600`}></div>
            </div>
                <div className={`${menu ? 'w-[820px] h-[600px] ml-6' : 'w-[650px] h-[600px] ml-4' } transition-all duration-500`}>
                <motion.div className={`${menu ? 'w-[100%]' : 'w-[100%]'} flex justify-center items-center`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="text-[#FA812F] mt-2 font-inter font-bold text-xl">Skills</div>
                </motion.div>
                
                {!menu &&(
                    <>
                    <motion.div className={`w-[650px] h-[120px] mt-5 flex flex-col items-center`} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="text-white font-inter text-[15px]">Programming Language</div>
                        <div className="flex gap-5">
                            {Pl.map((item,index)=>(
                                <div className="flex text-white gap-2 h-6 w-20 mt-5 outline outline-1  outline-gray-500 items-center justify-center"
                                    key={index}>
                                    <div>{item.icon}</div>
                                    <div className="text-[10px]">{item.name}</div>
                                </div>

                            ))}
                        </div>
                    </motion.div>
                    <motion.div className={`w-[650px] h-[120px]  flex flex-col items-center`} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="text-white font-inter text-[15px]">Tools</div>
                        <div className="flex flex-wrap justify-center gap-5">
                            {ToolsI.map((item,index)=>(
                                <div className="flex text-white gap-2 h-6 w-20 mt-5 outline outline-1 outline-gray-500 items-center justify-center"
                                    key={index}>
                                    <div>{item.icon}</div>
                                    <div className="text-[10px]">{item.name}</div>
                                </div>

                            ))}
                        </div>
                    </motion.div>
                    <motion.div className={`w-[650px] h-[120px] mt-16 flex flex-col items-center`} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="text-white font-inter text-[15px]">Microcontroller</div>
                        <div className="flex gap-5">
                            {Micro.map((item,index)=>(
                                <div className="flex text-white gap-2 h-6 w-20 mt-5 outline outline-1 outline-gray-500 items-center justify-center"
                                    key={index}>
                                    <div>{item.icon}</div>
                                    <div className="text-[10px]">{item.name}</div>
                                </div>

                            ))}
                        </div>
                    </motion.div>
                    </>
                )}
                {menu && (
                    <div className="flex">
                    <motion.div className={`w-[300px] h-[400px]  mt-5 flex flex-col items-center`} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="text-white font-inter text-[15px]">Programming Language</div>
                        <div className="flex gap-5">
                            {Pl.map((item,index)=>(
                                <div className="flex text-white gap-2 h-6 w-20 mt-5 outline outline-1 outline-gray-500 items-center justify-center"
                                    key={index}>
                                    <div>{item.icon}</div>
                                    <div className="text-[10px]">{item.name}</div>
                                </div>

                            ))}
                        </div>
                    </motion.div>
                    <motion.div className={`w-[300px] h-[400px]  mt-5 flex flex-col items-center`} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="text-white font-inter text-[15px]">Tools</div>
                        <div className="flex flex-wrap justify-center gap-5">
                            {ToolsI.map((item,index)=>(
                                <div className="flex text-white gap-2 h-6 w-20 mt-5 outline outline-1 outline-gray-500 items-center justify-center"
                                    key={index}>
                                    <div>{item.icon}</div>
                                    <div className="text-[10px]">{item.name}</div>
                                </div>

                            ))}
                        </div>
                    </motion.div>
                    <motion.div className={`w-[300px] h-[400px]  mt-5 flex flex-col items-center`} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="text-white font-inter text-[15px]">Microcontroller</div>
                        <div className="flex gap-5">
                            {Micro.map((item,index)=>(
                                <div className="flex text-white gap-2 h-6 w-20 mt-5 outline outline-1 outline-gray-500 items-center justify-center"
                                    key={index}>
                                    <div>{item.icon}</div>
                                    <div className="text-[10px]">{item.name}</div>
                                </div>

                            ))}
                        </div>
                    </motion.div>
                    </div>
                )}
            </div>

        </motion.div>
        
    )
}