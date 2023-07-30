import { useEffect, useState } from "react";
import { GetAllAgents } from "../../services/AgentsService";
import { AgentsContainer } from "./AgentsContainer";

export const Agents = () => {

    const [data, setData] = useState([])

    const fetchAgents = async () => {
        try {
            const apidata = await GetAllAgents();
            setData(apidata.data)
        } catch (error) {
            console.error('Error al obtener los datos desde el componente:', error)
        }
    }

    useEffect(()=>{
        fetchAgents()
    })

    return (
        <>
            <div style={{top:"9vh", position:"relative"}}>  
                <AgentsContainer/>          
                {/* {data.map((item)=>(
                    <div key={item.uuid}>
                        <AgentsContainer/>
                    </div>
                ))} */}
            </div>
        </>
    )
}