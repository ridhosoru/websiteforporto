import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function Project({menu}){
    const [detail,setDetail] = useState(null);
    const ItemPro= [
        {title :'MTC APP', source:'Python + PyQt6 + Supabase', date:'Batam, 24 April 2025 ', status:'On Going'},
        {title :'Automation Selection Wire Box', source:'Python + PyQt5 + SQLite', date:'Batam, 24 April 2025 ', status:'Finish'},
        {title :'Classification Product using YOLO v7 and Raspy4B', source:'Python + PyQt5 + SQLite', date:'Batam, 24 April 2025 ', status:'Finish'},
        {title :'Prediction Measurement using sklearn-decision tree', source:'Python + sklearn', date:'Batam, 24 April 2025 ', status:'Finish'},

    ];
    return(
        <div >
            {detail !== null && (
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/20 z-10 pointer-events-none transition-all duration-300" />
            )}
            <div className={`w-[100%] `}>
                <div className={`w-full flex justify-center `}>
                    <div className={`text-[#FA812F] text-xl font-bold font-inter mt-2`}> Project</div>
                </div>
                <div className={`w-[100%]  mt-2 text-white px-12 flex flex-wrap justify-between`}>
                    {ItemPro.map((item,index)=>(
                    <div>
                        <a href="#"    className={`w-[250px] h-[300px] mt-5 mb-10 flex outline outline-1 outline-gray-500 rounded-lg`}
                                key={index}
                                 onClick={()=>
                                    setDetail(index)
                                
                                }
                                 
                        >
                                <div className=" w-[250px] flex flex-col justify-end my-2 mx-2">
                                    <div className="text-white font-bold font-inter">{item.title}</div>
                                    <div className="font-inter text-[12px] text-gray-500">{item.source}</div>
                                    <div className="flex justify-between">
                                        <div className="font-inter text-[12px]  text-gray-500">{item.date}</div>
                                        <div className={`${item.status === 'On Going' ? 'outline-yellow-600 text-yellow-600' : 'outline-green-600 text-green-600'}  h-4 w-16 rounded-sm flex items-center justify-center outline outline-1 font-inter text-[10px]  `}
                                               
                                        >{item.status}</div>
                                    </div>
                                </div>
                        </a>
                        <div>
                            {detail === index &&(
                                <div className={`fixed ${menu ? 'top-[350px] left-[600px]' : 'top-[350px] left-[700px]'} transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] outline outline-1 outline-gray-500 rounded-lg bg-black  inset-0 z-30`}>
                                    <div className="flex justify-end mt-2 mx-2">
                                        <button className="text-gray-500 text-3xl font-bold"
                                                onClick={()=>
                                                    setDetail(null)
                                        
                                        }
                                        ><IoMdCloseCircle/></button>

                                    </div>
                                    
                                </div>
                            )}

                        </div>
                    </div>

                    
                    
                    
                ))}
                </div>
                
            </div>
        </div>
    )
}