import { useEffect, useState } from "react";
import { GetAllAgents } from "../../services/AgentsService";
import { AgentsContainer } from "./AgentsContainer";

export const Agents = () => {

    const [data, setData] = useState([])

    const fetchAgents = async () => {
        try {
            const apidata = await GetAllAgents();
            setData(apidata.data.filter((item)=> item.isPlayableCharacter == true))
        } catch (error) {
            console.error('Error al obtener los datos desde el componente:', error);
        }
    }
    useEffect(()=>{
        fetchAgents()
    }, [])

    return (
        <>
                <div style={{top:"9vh", position:"relative", backgroundColor:"#111"}}>          
                    {data.map((item, index)=>(
                        <div key={item.uuid}>
                            {item.isPlayableCharacter==true?<AgentsContainer item={item} role={item.role} index={index}/>:<></>}
                        </div>
                    ))}
                </div>
        </>
    )
}